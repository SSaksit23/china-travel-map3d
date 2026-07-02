/**
 * Media coverage audit — the worklist for filling per-location image/video.
 *
 * For every stop it reads the unified manifest (src/data/media/media.json) and
 * reports what's present:
 *   img(n)  — n committed gallery images (public/attractions/…)
 *   vid ✓/✗ — an external video URL is set or not
 * plus validation: flags manifest image paths whose file is missing on disk,
 * and stops that have no manifest entry at all (run `npm run scaffold:media`).
 *
 * Run:  npm run audit:media
 *   --todo   only list locations with no images (the backlog)
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { stops } from "../src/data/stops.ts";
import type { LocationMedia } from "../src/types.ts";
import { L } from "../src/lib/localize.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT = resolve(ROOT, "src/data/media/media.json");
const onlyTodo = process.argv.includes("--todo");

let manifest: Record<string, LocationMedia> = {};
try {
  manifest = JSON.parse(readFileSync(OUT, "utf8"));
} catch {
  console.error("media.json not found — run `npm run scaffold:media` first.");
  process.exit(1);
}

let withImages = 0;
let withVideo = 0;
let missingEntry = 0;
const brokenPaths: string[] = [];

for (const stop of stops) {
  const m = manifest[stop.id];
  const imgs = m?.images ?? [];
  const hasVid = !!m?.video;
  if (imgs.length) withImages++;
  if (hasVid) withVideo++;
  if (!m) missingEntry++;

  // Validate image paths resolve to a real file under public/.
  for (const p of imgs) {
    if (!existsSync(resolve(ROOT, "public", p.replace(/^\//, "")))) {
      brokenPaths.push(`${stop.id}: ${p}`);
    }
  }

  if (onlyTodo && imgs.length) continue;
  const status = !m
    ? "✗ no entry (scaffold)"
    : `img(${imgs.length}) · vid ${hasVid ? "✓" : "✗"}`;
  console.log(`  ${imgs.length || hasVid ? "•" : "○"} ${stop.id.padEnd(22)} ${status}  ${L(stop.name, "en")}`);
}

const total = stops.length;
console.log("\n────────────────────────────────────────");
console.log(`Locations: ${total}`);
console.log(`  with image(s): ${withImages} (${Math.round((withImages / total) * 100)}%)`);
console.log(`  with video   : ${withVideo}`);
console.log(`  empty        : ${total - withImages}`);
if (missingEntry) console.log(`  ✗ missing manifest entry: ${missingEntry} — run npm run scaffold:media`);
if (brokenPaths.length) {
  console.log(`\n✗ image paths with no file on disk (${brokenPaths.length}):`);
  for (const b of brokenPaths) console.log(`  - ${b}`);
  process.exitCode = 1;
}
