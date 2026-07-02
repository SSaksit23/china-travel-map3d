/**
 * Gazetteer lookup helper for geocoding itinerary attractions.
 *
 * Queries a local MCGD place-name gazetteer (romanized name, province, lat/long)
 * to speed up adding new stops to src/data/stops.ts. It is an ACCELERATOR, not a
 * source of truth: it covers towns/counties/villages well but misses many named
 * scenic spots (grasslands, bridges, parks), and the raw data has some corrupt
 * rows — so every candidate is range-checked against China's bounding box and
 * you still confirm the match is the right place before committing coordinates.
 *
 * The data file is local + gitignored (scripts/.geodata/mcgd.csv) — not committed.
 *
 * Usage:
 *   npm run geo -- "Tekes"              # search all provinces
 *   npm run geo -- "Nalati" Xinjiang    # filter by province (Prov_Py)
 *
 * Output columns: Name | Prov_Py | [lng, lat] | Code   (ready to paste as coords)
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = resolve(__dirname, ".geodata/mcgd.csv");

// Rough mainland-China bounding box — filters out corrupt coordinates.
const inChina = (lat: number, lng: number) =>
  Number.isFinite(lat) && Number.isFinite(lng) && lat >= 15 && lat <= 54 && lng >= 73 && lng <= 135;

function main() {
  const [query, province] = process.argv.slice(2);
  if (!query) {
    console.error('Usage: npm run geo -- "<name>" [Province]');
    process.exit(1);
  }
  if (!existsSync(DATA)) {
    console.error(`Gazetteer not found at ${DATA}\nPlace the MCGD csv there (it is gitignored).`);
    process.exit(1);
  }

  const q = query.toLowerCase();
  const prov = province?.toLowerCase();
  const lines = readFileSync(DATA, "utf8").split(/\r?\n/);
  // header: Name,Prov_Zh,Prov_Py,Code,LAT,LONG,LocID,NameID,PROVID

  type Row = { name: string; prov: string; code: string; lat: number; lng: number; exact: boolean };
  const rows: Row[] = [];
  const seen = new Set<string>();
  for (let i = 1; i < lines.length; i++) {
    const c = lines[i].split(",");
    if (c.length < 6) continue;
    const name = c[0];
    const provPy = c[2];
    if (!name.toLowerCase().includes(q)) continue;
    if (prov && provPy.toLowerCase() !== prov) continue;
    const lat = Number(c[4]);
    const lng = Number(c[5]);
    if (!inChina(lat, lng)) continue;
    const key = `${name}|${lat.toFixed(3)}|${lng.toFixed(3)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    rows.push({ name, prov: provPy, code: c[3], lat, lng, exact: name.toLowerCase() === q });
  }

  // Exact name matches first, then alphabetically; cap output.
  rows.sort((a, b) => Number(b.exact) - Number(a.exact) || a.name.localeCompare(b.name));

  if (!rows.length) {
    console.log(`No valid gazetteer match for "${query}"${province ? ` in ${province}` : ""}.`);
    console.log("→ Not all scenic spots are in this dataset; fall back to a web/Wikipedia lookup.");
    return;
  }
  console.log(`Matches for "${query}"${province ? ` in ${province}` : ""} (valid coords only):\n`);
  for (const r of rows.slice(0, 20)) {
    const coords = `[${r.lng.toFixed(5)}, ${r.lat.toFixed(5)}]`;
    console.log(`  ${r.exact ? "★" : " "} ${r.name.padEnd(24)} ${r.prov.padEnd(12)} ${coords}  (${r.code})`);
  }
  if (rows.length > 20) console.log(`  … and ${rows.length - 20} more`);
}

main();
