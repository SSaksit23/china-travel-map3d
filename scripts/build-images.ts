/**
 * Build-time attraction image + description fetcher.
 *
 * For every stop with a `wiki` (English Wikipedia title), call the keyless
 * Wikipedia REST summary endpoint and store a thumbnail, full image, the
 * page extract (fallback description) and an attribution link.
 *
 * Output: src/data/media/images.json, committed so the app makes no runtime
 * calls. Run with: npm run build:images
 */
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { stops } from "../src/data/stops.ts";
import type { AttractionMedia } from "../src/types.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "../src/data/media");
const PUBLIC_ATTR = resolve(__dirname, "../public/attractions");
const LOCAL_EXTS = ["jpg", "jpeg", "png", "webp"];
const REST = "https://en.wikipedia.org/api/rest_v1/page/summary";
const UA = "chinese-travel-map/1.0 (travel agent sales map)";

/**
 * A curated local photo in public/attractions/<id>.<ext> (e.g. from the local
 * photo library) takes priority over Wikipedia — both to fill gaps where
 * Wikipedia has no image and to let any photo be overridden by dropping a file.
 */
function localImage(id: string): AttractionMedia | null {
  for (const ext of LOCAL_EXTS) {
    if (existsSync(resolve(PUBLIC_ATTR, `${id}.${ext}`))) {
      const url = `/attractions/${id}.${ext}`;
      return { thumb: url, full: url, credit: "Chinese Travel Map" } satisfies AttractionMedia;
    }
  }
  return null;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

type Summary = {
  title?: string;
  extract?: string;
  thumbnail?: { source: string };
  originalimage?: { source: string };
  content_urls?: { desktop?: { page?: string } };
};

async function fetchSummary(title: string): Promise<AttractionMedia | null> {
  const url = `${REST}/${encodeURIComponent(title)}`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA, accept: "application/json" } });
    if (!res.ok) return null;
    const j = (await res.json()) as Summary;
    if (!j.thumbnail && !j.extract) return null;
    return {
      thumb: j.thumbnail?.source,
      full: j.originalimage?.source ?? j.thumbnail?.source,
      extract: j.extract,
      credit: "Wikipedia / Wikimedia Commons",
      sourceUrl: j.content_urls?.desktop?.page,
    };
  } catch {
    return null;
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const out: Record<string, AttractionMedia> = {};
  let ok = 0;
  let miss = 0;

  for (const stop of stops) {
    const local = localImage(stop.id);
    if (local) {
      out[stop.id] = local;
      ok++;
      console.log(`✓ ${stop.id} <- local photo`);
      continue;
    }
    if (!stop.wiki) {
      console.warn(`- ${stop.id}: no wiki title, skipped`);
      continue;
    }
    const media = await fetchSummary(stop.wiki);
    if (media?.thumb) {
      out[stop.id] = media;
      ok++;
      console.log(`✓ ${stop.id} <- ${stop.wiki}`);
    } else {
      miss++;
      console.warn(`! ${stop.id}: no image for "${stop.wiki}" (will use placeholder + blurb)`);
    }
    await sleep(200);
  }

  await writeFile(resolve(OUT_DIR, "images.json"), JSON.stringify(out, null, 0));
  console.log(`Done: ${ok} images, ${miss} missing.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
