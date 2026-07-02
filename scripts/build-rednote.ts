/**
 * Build-time RedNote / Xiaohongshu (小红书) media fetcher.
 *
 * For every stop the admin curated in src/data/rednote.ts, call the RNote API
 * (https://rnote.dev — a read-only RedNote data API), download the cover + up
 * to 4 images and the (vertical) video into public/, and commit a compact map
 * to src/data/media/rednote.json — so the deployed app stays static and
 * keyless (no API key, no third-party hotlinks, no per-view billing).
 *
 * The API key is read from REDNOTE_API (env or the local .env file).
 * Run with: npm run build:rednote
 *
 * ── Copyright ─────────────────────────────────────────────────────────────
 * This downloads other people's posts. Only point src/data/rednote.ts at the
 * agency's OWN RedNote account, or notes you have permission to reuse — pulling
 * third-party UGC into a commercial sales tool is a real licensing risk.
 *
 * ── Schema note ───────────────────────────────────────────────────────────
 * RNote does not publish the exact `data` shape, so the extractors below probe
 * the known Xiaohongshu field-name variants. On every fetch the raw JSON is
 * also written to scripts/.rednote-debug/<stopId>.json (gitignored) so the
 * mapping can be confirmed/adjusted against a real note.
 */
import { readFileSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { rednoteSelections, type RednoteSelection } from "../src/data/rednote.ts";
import type { PlaceVideo, RednoteMedia } from "../src/types.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT_DIR = resolve(ROOT, "src/data/media");
const PUBLIC_ATTR = resolve(ROOT, "public/attractions");
const PUBLIC_MEDIA = resolve(ROOT, "public/media");
const DEBUG_DIR = resolve(__dirname, ".rednote-debug");
const API = "https://rnote.dev/api/v2/crawler";
const MAX_IMAGES = 4;
/** Browser-ish headers so RedNote's CDN serves the media to a node fetch. */
const MEDIA_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
  Referer: "https://www.xiaohongshu.com/",
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function loadApiKey(): string {
  if (process.env.REDNOTE_API) return process.env.REDNOTE_API.trim();
  try {
    const env = readFileSync(resolve(ROOT, ".env"), "utf8");
    const line = env.split(/\r?\n/).find((l) => l.trim().startsWith("REDNOTE_API"));
    if (line) return line.split("=").slice(1).join("=").trim();
  } catch {
    /* ignore */
  }
  throw new Error("REDNOTE_API not set (env or .env)");
}

/** Pull the 24-hex note id out of an /explore/<id> or /discovery/item/<id> URL. */
function noteIdFromUrl(url: string): string | null {
  const m = url.match(/([0-9a-fA-F]{24})/);
  return m ? m[1] : null;
}

type Envelope = { success?: boolean; data?: unknown; billed?: boolean; debug_info?: string };

async function fetchNote(key: string, sel: RednoteSelection): Promise<unknown | null> {
  const noteId = noteIdFromUrl(sel.url);
  if (!noteId) {
    console.warn(`  ! could not parse note id from ${sel.url}`);
    return null;
  }
  const params = new URLSearchParams({ note_id: noteId });
  if (sel.xsecToken) params.set("xsec_token", sel.xsecToken);
  const url = `${API}/note/${sel.type}?${params}`;

  let res = await fetch(url, { headers: { "X-API-Key": key } });
  for (let attempt = 0; !res.ok && attempt < 4; attempt++) {
    if (res.status !== 429 && res.status < 500) break;
    await sleep(2000 * (attempt + 1));
    res = await fetch(url, { headers: { "X-API-Key": key } });
  }
  if (!res.ok) {
    console.warn(`  ! API ${res.status} for note ${noteId}`);
    return null;
  }
  const env = (await res.json()) as Envelope;
  if (env.success === false || env.data == null) {
    console.warn(`  ! API said not-found/failed: ${env.debug_info ?? "(no info)"}`);
    return null;
  }
  return env.data;
}

/* ── Defensive extractors (probe known Xiaohongshu field-name variants) ───── */

const isHttp = (v: unknown): v is string => typeof v === "string" && /^https?:\/\//.test(v);

/** Depth-first walk collecting the first http(s) string under any of `keys`. */
function collectUrls(node: unknown, keys: string[], out: string[], seen = new Set<unknown>()) {
  if (node == null || typeof node !== "object" || seen.has(node)) return;
  seen.add(node);
  if (Array.isArray(node)) {
    for (const item of node) collectUrls(item, keys, out, seen);
    return;
  }
  for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
    if (keys.includes(k)) {
      if (isHttp(v) && !out.includes(v)) out.push(v);
      else if (Array.isArray(v)) {
        for (const item of v) {
          if (isHttp(item) && !out.includes(item)) out.push(item);
          else collectUrls(item, keys, out, seen);
        }
      } else collectUrls(v, keys, out, seen);
    } else {
      collectUrls(v, keys, out, seen);
    }
  }
}

/** Best image urls for an image note (prefers default/large variants). */
function extractImages(data: unknown): string[] {
  const out: string[] = [];
  // Highest-fidelity fields first, then progressively looser ones.
  for (const keys of [["url_default", "urlDefault"], ["url_size_large", "url"], ["info_list"]]) {
    collectUrls(data, keys, out);
    if (out.length >= MAX_IMAGES) break;
  }
  if (!out.length) collectUrls(data, ["image_list", "images", "imageList"], out);
  // Drop obvious non-photo assets (e.g. avatars) and cap.
  return out.filter((u) => !/avatar|emoji|icon/i.test(u)).slice(0, MAX_IMAGES);
}

/** Best video playback url + cover for a video note. */
function extractVideo(data: unknown): { video?: string; cover?: string } {
  const vids: string[] = [];
  collectUrls(data, ["master_url", "masterUrl", "backup_urls", "stream_url"], vids);
  if (!vids.length) collectUrls(data, ["video_url", "videoUrl", "url"], vids);
  const video = vids.find((u) => /\.mp4|\/video\/|stream/i.test(u)) ?? vids[0];

  const covers: string[] = [];
  collectUrls(data, ["first_frame", "firstFrame", "cover", "url_default"], covers);
  return { video, cover: covers.find((u) => !/\.mp4/i.test(u)) };
}

function extractCredit(data: unknown): string | undefined {
  const d = data as Record<string, unknown> | null;
  const user =
    (d?.user as Record<string, unknown>) ??
    (d?.author as Record<string, unknown>) ??
    ((d?.note_card as Record<string, unknown>)?.user as Record<string, unknown>);
  const name = user?.nickname ?? user?.name ?? user?.nick_name;
  return typeof name === "string" ? `小红书 @${name}` : undefined;
}

/* ── Download helpers ─────────────────────────────────────────────────────── */

function extOf(url: string, contentType: string | null, fallback: string): string {
  const ct = contentType ?? "";
  if (/mp4/.test(ct)) return "mp4";
  if (/jpeg|jpg/.test(ct)) return "jpg";
  if (/png/.test(ct)) return "png";
  if (/webp/.test(ct)) return "webp";
  const m = url.split("?")[0].match(/\.(mp4|jpe?g|png|webp)$/i);
  return m ? m[1].toLowerCase().replace("jpeg", "jpg") : fallback;
}

/** Download a remote asset to <dir>/<base>.<ext>, return its public path. */
async function download(url: string, dir: string, base: string, fallbackExt: string): Promise<string | null> {
  let res = await fetch(url, { headers: MEDIA_HEADERS });
  for (let attempt = 0; !res.ok && attempt < 3; attempt++) {
    await sleep(1500 * (attempt + 1));
    res = await fetch(url, { headers: MEDIA_HEADERS });
  }
  if (!res.ok) {
    console.warn(`    ! download ${res.status}: ${url.slice(0, 80)}`);
    return null;
  }
  const ext = extOf(url, res.headers.get("content-type"), fallbackExt);
  const buf = Buffer.from(await res.arrayBuffer());
  const dirName = dir === PUBLIC_MEDIA ? "media" : "attractions";
  await writeFile(resolve(dir, `${base}.${ext}`), buf);
  return `/${dirName}/${base}.${ext}`;
}

/* ── Main ─────────────────────────────────────────────────────────────────── */

async function main() {
  const entries = Object.entries(rednoteSelections);
  if (!entries.length) {
    console.log("No RedNote selections in src/data/rednote.ts — nothing to do.");
    return;
  }
  const key = loadApiKey();
  await mkdir(OUT_DIR, { recursive: true });
  await mkdir(PUBLIC_ATTR, { recursive: true });
  await mkdir(PUBLIC_MEDIA, { recursive: true });
  await mkdir(DEBUG_DIR, { recursive: true });

  const outPath = resolve(OUT_DIR, "rednote.json");
  const out: Record<string, RednoteMedia> = {};
  try {
    Object.assign(out, JSON.parse(await readFile(outPath, "utf8")));
  } catch {
    /* first run */
  }

  let ok = 0;
  let miss = 0;
  for (const [stopId, sel] of entries) {
    console.log(`• ${stopId} (${sel.type})`);
    const data = await fetchNote(key, sel);
    if (!data) {
      miss++;
      continue;
    }
    // Always keep the raw response so the mapping can be verified/adjusted.
    await writeFile(resolve(DEBUG_DIR, `${stopId}.json`), JSON.stringify(data, null, 2));

    const media: RednoteMedia = { sourceUrl: sel.url, credit: extractCredit(data) };

    if (sel.type === "video") {
      const { video, cover } = extractVideo(data);
      const local = video && (await download(video, PUBLIC_MEDIA, stopId, "mp4"));
      if (local) {
        const placeVideo: PlaceVideo = { type: "mp4", url: local, orientation: "vertical" };
        media.video = placeVideo;
      } else {
        console.warn(`  ! no video url resolved (see scripts/.rednote-debug/${stopId}.json)`);
      }
      // A video note still has a cover — use it as the single gallery image.
      const coverPath = cover && (await download(cover, PUBLIC_ATTR, `${stopId}-1`, "jpg"));
      if (coverPath) media.gallery = [coverPath];
    } else {
      const images = extractImages(data);
      if (!images.length) {
        console.warn(`  ! no images resolved (see scripts/.rednote-debug/${stopId}.json)`);
      }
      const gallery: string[] = [];
      for (let i = 0; i < images.length; i++) {
        const p = await download(images[i], PUBLIC_ATTR, `${stopId}-${i + 1}`, "jpg");
        if (p) gallery.push(p);
      }
      if (gallery.length) media.gallery = gallery;
    }

    if (media.gallery?.length || media.video) {
      out[stopId] = media;
      ok++;
      console.log(`  ✓ ${media.gallery?.length ?? 0} image(s)${media.video ? " + video" : ""}`);
    } else {
      miss++;
    }
    await sleep(800);
  }

  await writeFile(outPath, JSON.stringify(out, null, 0));
  console.log(`Done: ${ok} stop(s) with media, ${miss} missing.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
