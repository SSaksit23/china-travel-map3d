import { useCallback, useEffect, useState } from "react";

/**
 * Photos an agent uploads from the attraction card, kept in this browser's
 * IndexedDB (keyed by stop id) until they are published for everyone
 * (lib/publishMedia). A published copy stays here — marked with its repo path —
 * until the rebuilt site serves that path, then it is dropped.
 */

type StoredImage = {
  id: string;
  stopId: string;
  blob: Blob;
  added: number;
  /** Public path once committed, e.g. "/attractions/<id>-<stamp>-1.jpg". */
  publishedPath?: string;
};
export type LocalImage = { id: string; url: string; blob: Blob; publishedPath?: string };

const DB_NAME = "ctm-local-media";
const STORE = "images";

let dbPromise: Promise<IDBDatabase> | null = null;

function openDb(): Promise<IDBDatabase> {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => {
        const store = req.result.createObjectStore(STORE, { keyPath: "id" });
        store.createIndex("stopId", "stopId");
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    dbPromise.catch(() => (dbPromise = null));
  }
  return dbPromise;
}

function run<T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const req = fn(db.transaction(STORE, mode).objectStore(STORE));
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      })
  );
}

const listFor = (stopId: string) =>
  run<StoredImage[]>("readonly", (s) => s.index("stopId").getAll(stopId)).then((rows) =>
    rows.sort((a, b) => a.added - b.added)
  );

/**
 * Uploaded photos for one stop, plus add/remove/markPublished. `liveImages` are
 * the paths the deployed site already serves; published copies found there are
 * cleaned up. Fails soft (empty) when storage is blocked.
 */
export function useLocalImages(stopId: string, liveImages: string[] = []) {
  const [images, setImages] = useState<LocalImage[]>([]);
  const [version, setVersion] = useState(0);
  const liveKey = liveImages.join("|");

  useEffect(() => {
    let cancelled = false;
    let urls: string[] = [];
    const live = new Set(liveKey ? liveKey.split("|") : []);
    listFor(stopId)
      .then(async (rows) => {
        const landed = rows.filter((r) => r.publishedPath && live.has(r.publishedPath));
        for (const r of landed) await run("readwrite", (s) => s.delete(r.id));
        const keep = rows.filter((r) => !landed.includes(r));
        if (cancelled) return;
        urls = keep.map((r) => URL.createObjectURL(r.blob));
        setImages(
          keep.map((r, i) => ({ id: r.id, url: urls[i], blob: r.blob, publishedPath: r.publishedPath }))
        );
      })
      .catch(() => !cancelled && setImages([]));
    return () => {
      cancelled = true;
      urls.forEach((u) => URL.revokeObjectURL(u));
    };
  }, [stopId, liveKey, version]);

  const add = useCallback(
    async (files: File[]) => {
      const imgs = files.filter((f) => f.type.startsWith("image/"));
      if (!imgs.length) return;
      try {
        for (const blob of imgs) {
          const rec: StoredImage = { id: crypto.randomUUID(), stopId, blob, added: Date.now() };
          await run("readwrite", (s) => s.put(rec));
        }
      } finally {
        setVersion((v) => v + 1);
      }
    },
    [stopId]
  );

  const remove = useCallback(async (id: string) => {
    try {
      await run("readwrite", (s) => s.delete(id));
    } finally {
      setVersion((v) => v + 1);
    }
  }, []);

  /** Record the committed path for each published photo (same order as `ids`). */
  const markPublished = useCallback(async (ids: string[], paths: string[]) => {
    try {
      for (const [i, id] of ids.entries()) {
        const rec = await run<StoredImage | undefined>("readonly", (s) => s.get(id));
        if (rec) await run("readwrite", (s) => s.put({ ...rec, publishedPath: paths[i] }));
      }
    } finally {
      setVersion((v) => v + 1);
    }
  }, []);

  return { images, add, remove, markPublished };
}
