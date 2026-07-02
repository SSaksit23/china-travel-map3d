/**
 * Seed per-location content files and build the unified media manifest.
 *
 * Two jobs (idempotent — re-run anytime):
 *   1. Ensure one editable content file per stop at content/media/<id>.json.
 *      These are the slots the Decap CMS (/admin) edits — one per location.
 *   2. Build src/data/media/media.json (read by getLocationMedia) by merging,
 *      for every stop: the content file's `images` + `video` (CMS-entered) with
 *      a disk scan of public/attractions/<id>*.<ext> (manual drops). Content
 *      image paths win; the disk scan supplements them.
 *
 * Conventions:
 *   - Images: committed under public/attractions/. Decap uploads land here;
 *     manual drops use <id>.<ext> (hero) / <id>-1..4.<ext> (gallery).
 *   - Video: external URL in the content file's `video` field (+ `orientation`).
 *
 * media.json is a BUILD ARTIFACT — `npm run build` runs this first.
 * Run directly:  npm run scaffold:media
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { stops } from "../src/data/stops.ts";
import type { LocationMedia, PlaceVideo } from "../src/types.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const PUBLIC_ATTR = resolve(ROOT, "public/attractions");
const CONTENT_DIR = resolve(ROOT, "content/media");
const OUT = resolve(ROOT, "src/data/media/media.json");
const LOCAL_EXTS = ["jpg", "jpeg", "png", "webp"];

/** Editable per-location content record (what Decap writes). */
type MediaContent = {
  id: string;
  name: string;
  images?: string[];
  video?: string;
  orientation?: "horizontal" | "vertical";
};

/** First existing "<base>.<ext>" as a public path, or null. */
function findImage(base: string): string | null {
  for (const ext of LOCAL_EXTS) {
    if (existsSync(resolve(PUBLIC_ATTR, `${base}.${ext}`))) return `/attractions/${base}.${ext}`;
  }
  return null;
}

/** Committed images for a stop by convention: hero (<id>) then <id>-1 … <id>-4. */
function scanImages(id: string): string[] {
  const found: string[] = [];
  const hero = findImage(id);
  if (hero) found.push(hero);
  for (let n = 1; n <= 4; n++) {
    const g = findImage(`${id}-${n}`);
    if (g && !found.includes(g)) found.push(g);
  }
  return found;
}

/** Turn a content `video` URL into a PlaceVideo (YouTube auto-detected). */
function toVideo(url: string | undefined, orientation?: string): PlaceVideo | null {
  const u = (url ?? "").trim();
  if (!u) return null;
  const type = /youtu\.?be/i.test(u) ? "youtube" : "mp4";
  return {
    type,
    url: u,
    ...(orientation === "vertical" ? { orientation: "vertical" as const } : {}),
  };
}

/** Create an empty content file for a stop if it doesn't exist yet. */
function seedContent(id: string, name: string): MediaContent {
  const path = resolve(CONTENT_DIR, `${id}.json`);
  if (existsSync(path)) {
    try {
      return JSON.parse(readFileSync(path, "utf8")) as MediaContent;
    } catch {
      /* fall through to reseed */
    }
  }
  const seed: MediaContent = { id, name, images: [], video: "", orientation: "horizontal" };
  writeFileSync(path, `${JSON.stringify(seed, null, 2)}\n`);
  return seed;
}

function main() {
  mkdirSync(CONTENT_DIR, { recursive: true });

  const out: Record<string, LocationMedia> = {};
  let withImages = 0;
  let withVideo = 0;
  for (const stop of stops) {
    const content = seedContent(stop.id, stop.name.en);
    // Merge CMS-declared images with the on-disk convention scan (dedup).
    const images: string[] = [];
    for (const src of [...(content.images ?? []), ...scanImages(stop.id)]) {
      if (src && !images.includes(src)) images.push(src);
    }
    const video = toVideo(content.video, content.orientation);
    const entry: LocationMedia = { images, video };
    out[stop.id] = entry;
    if (images.length) withImages++;
    if (video) withVideo++;
  }

  writeFile(OUT, `${JSON.stringify(out, null, 2)}\n`);
  const total = stops.length;
  console.log(
    `media: ${total} content slots seeded · media.json built · ` +
      `${withImages} with image(s) · ${withVideo} with video · ${total - withImages} empty.`
  );
  // Warn about orphan content files (stop removed/renamed).
  const known = new Set(stops.map((s) => `${s.id}.json`));
  for (const f of readdirSync(CONTENT_DIR)) {
    if (f.endsWith(".json") && !known.has(f)) console.warn(`  ! orphan content file: content/media/${f}`);
  }
}

main();
