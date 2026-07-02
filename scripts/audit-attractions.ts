/**
 * Attraction-pin audit — the worklist for giving every itinerary attraction its
 * own clickable pin (see the `along[].stopId` mechanism in src/types.ts).
 *
 * For every program → day → `along` line it reports:
 *   ✓ linked   — has a stopId that resolves to a real Stop (a pin + photo slot)
 *   ○ text     — plain text (pass-by mention or not yet pinned)
 *   ✗ BROKEN   — has a stopId that does NOT match any Stop (would silently fall
 *                back to text — a typo to fix)
 *
 * Run with:  npm run audit:attractions
 *   --unlinked   only print the plain-text lines still to be worked (the backlog)
 *   --broken     only print broken stopIds (data errors to fix first)
 *
 * This makes the rollout a checklist you can work program-by-program until the
 * "linked" count hits 100% of the lines you intend to pin.
 */
import { programs } from "../src/data/programs.ts";
import { stops } from "../src/data/stops.ts";
import { L } from "../src/lib/localize.ts";

const stopIds = new Set(stops.map((s) => s.id));
const onlyUnlinked = process.argv.includes("--unlinked");
const onlyBroken = process.argv.includes("--broken");

let linked = 0;
let text = 0;
let broken = 0;
const brokenList: string[] = [];

for (const p of programs) {
  if (!p.itinerary?.length) continue;
  const rows: string[] = [];
  for (const day of p.itinerary) {
    for (const a of day.along) {
      const en = L(a, "en");
      if (a.stopId && stopIds.has(a.stopId)) {
        linked++;
        if (!onlyUnlinked && !onlyBroken) rows.push(`    ✓ [${a.stopId}] ${en}`);
      } else if (a.stopId) {
        broken++;
        brokenList.push(`${p.id} d${day.day}: stopId "${a.stopId}" not found — ${en}`);
        if (!onlyUnlinked) rows.push(`    ✗ BROKEN stopId "${a.stopId}" — ${en}`);
      } else {
        text++;
        if (!onlyBroken) rows.push(`    ○ ${en}`);
      }
    }
  }
  if (rows.length) {
    console.log(`\n${p.id} — ${L(p.title, "en")}`);
    for (const r of rows) console.log(r);
  }
}

const total = linked + text + broken;
console.log("\n────────────────────────────────────────");
console.log(`Total along lines: ${total}`);
console.log(`  ✓ linked : ${linked} (${total ? Math.round((linked / total) * 100) : 0}%)`);
console.log(`  ○ text   : ${text}`);
console.log(`  ✗ broken : ${broken}`);
if (broken) {
  console.log("\nBroken stopIds (fix these — they fall back to plain text):");
  for (const b of brokenList) console.log(`  - ${b}`);
  process.exitCode = 1;
}
