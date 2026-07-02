/**
 * One-shot codemod: auto-link itinerary `along` lines to existing stops.
 *
 * For each `along` line that has no stopId yet, it finds the FIRST existing stop
 * whose name (or a curated alias) appears in the English text and appends
 * `stopId: "<id>"`. It is deliberately conservative:
 *   - scoped strictly to `along:` array blocks (never highlights/prep/flights),
 *   - skips flight/transit lines (fly, connect, flight numbers like CZ362),
 *   - matches whole words only, longest phrase first (one stop per line),
 *   - never touches a line that already has a stopId.
 *
 * It links the PRIMARY attraction of each line; compound lines naming a second
 * place are refined by hand afterwards. Always review `npm run audit:attractions`
 * output after running, then re-check the diff.
 *
 * Run:  npm run autolink:stops        (writes the file)
 *       npm run autolink:stops -- --dry   (preview only, no write)
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { stops } from "../src/data/stops.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = resolve(__dirname, "../src/data/programs.ts");
const dry = process.argv.includes("--dry");

// Distinctive prose synonyms → stopId (things the itinerary calls a place that
// differ from its stop name). High-confidence proper nouns only.
const ALIASES: Record<string, string> = {
  potala: "lhasa",
  jokhang: "lhasa",
  barkhor: "lhasa",
  mogao: "dunhuang",
  terracotta: "xian",
  "xi'an": "xian",
  shaolin: "dengfeng",
  danxia: "zhangye",
  "rainbow mountain": "zhangye",
  labrang: "xiahe",
  "port arthur": "lvshun",
  "red beach": "panjin",
  "snow town": "snowtown",
  "ghost city": "wuerhe",
  "five color beach": "wucaitan",
  "grand bazaar": "urumqi-bazaar",
  huanglong: "songpan",
  // Named sub-sights → their (already-pinned) city/attraction stop.
  "st sophia": "harbin",
  "central street": "harbin",
  "volga manor": "harbin",
  "sun island": "harbin",
  "baroque street": "harbin",
  zhanqiao: "qingdao",
  "st michael": "qingdao",
  badaguan: "qingdao",
  tsingtao: "qingdao",
  "may fourth": "qingdao",
  "german old town": "qingdao",
  "id kah": "kashgar",
  xiangfei: "kashgar",
  "fragrant concubine": "kashgar",
  norbulingka: "lhasa",
  "tibet museum": "lhasa",
  mukden: "shenyang",
  yalu: "dandong",
  changyu: "yantai",
  "qinghai museum": "xining",
  xinghai: "dalian",
  "eastern venice": "dalian",
  "pearl shoal": "jiuzhaigou",
  nuorilang: "jiuzhaigou",
  "five-colour pond": "jiuzhaigou",
  "five-flower": "jiuzhaigou",
  kumbum: "kumbum",
  "ta'er": "kumbum",
  bingling: "bingling",
  // Shanxi / Henan heritage
  yungang: "datong",
  "hanging temple": "datong",
  fogong: "datong",
  longmen: "luoyang",
  guanlin: "luoyang",
  rishengchang: "pingyao",
  "wang family compound": "pingyao",
  wutai: "wutaishan",
  guandi: "yuncheng",
  // Xi'an / Gansu
  "big wild goose": "xian",
  "muslim quarter": "xian",
  mingsha: "dunhuang",
  "singing-sand": "dunhuang",
  shazhou: "dunhuang",
  "mati temple": "zhangye",
  // Xinjiang / Tibet sub-sights
  "heavenly lake": "tianchi",
  "sleeping-dragon": "tianchi",
  bogda: "tianchi",
  "five color river": "burqin",
  "five-colour river": "burqin",
  "red sea": "bachu",
  "euphrates poplar": "bachu",
  dawakun: "bachu",
  amannisa: "yarkand",
  kading: "nyingchi",
  juebo: "nyingchi",
  // Inner Mongolia / Henan / Dongbei
  kangbashi: "ordos",
  mengniu: "hohhot",
  "corn tower": "zhengzhou",
  "february 27": "zhengzhou",
  "ruyi lake": "zhengzhou",
  "stalin park": "harbin",
  "flood control": "harbin",
  "locomotive shed": "hengdaohezi",
  "oil-painting village": "hengdaohezi",
  "snow-charm": "snowtown",
  xueyun: "snowtown",
  "torch road": "weihai",
  "gate of happiness": "weihai",
  "yantai hill": "yantai",
  liudingshan: "dunhua",
  yanbian: "yanji",
  "korean folk": "yanji",
  // Final stragglers
  "china baroque": "harbin",
  "binhai road": "dalian",
  "beida bridge": "dalian",
  lianhua: "dalian",
  "datang everbright": "xian",
  "everbright city": "xian",
  "divine lake": "kanas",
  "moon bay": "kanas",
  "gate-opening": "kashgar",
  "rainbow alley": "kashgar",
  pingyao: "pingyao",
  "bodhisattva peak": "wutaishan",
  xiantong: "wutaishan",
  tayuan: "wutaishan",
  wusong: "jilin-city",
  "rime corridor": "jilin-city",
};

/** Build phrase → id table from stop names (base + any parenthetical) + aliases. */
function buildPhrases(): { phrase: string; id: string }[] {
  const out: { phrase: string; id: string }[] = [];
  for (const s of stops) {
    const en = s.name.en;
    const paren = en.match(/\(([^)]+)\)/)?.[1];
    const base = en.replace(/\s*\([^)]*\)\s*/g, " ").trim();
    for (const p of [base, paren]) {
      if (p && p.length >= 4) out.push({ phrase: p.toLowerCase(), id: s.id });
    }
  }
  for (const [phrase, id] of Object.entries(ALIASES)) out.push({ phrase, id });
  // Longest phrases first so "Sayram Lake" wins over a bare "Lake", etc.
  return out.sort((a, b) => b.phrase.length - a.phrase.length);
}

const phrases = buildPhrases();
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Skip flight lines only — an attraction named alongside a "transfer"/"drive"
 *  should still link its attraction, so we no longer skip those. */
const isTransit = (en: string) =>
  /\b(fly|flew|flight|connect home|connecting)\b/i.test(en) ||
  /\b[A-Z]{2}\d{2,4}\b/.test(en) || // flight numbers: CZ362, CA2505, SL965
  /Suvarnabhumi|Don Muang/i.test(en);

function matchStop(en: string): string | null {
  const hay = en.toLowerCase();
  for (const { phrase, id } of phrases) {
    const re = new RegExp(`(^|[^a-z])${esc(phrase)}([^a-z]|$)`, "i");
    if (re.test(hay)) return id;
  }
  return null;
}

const lines = readFileSync(FILE, "utf8").split("\n");
let inAlong = false;
let linked = 0;
const report: string[] = [];

const out = lines.map((raw) => {
  const cr = raw.endsWith("\r") ? "\r" : ""; // preserve CRLF endings
  const line = cr ? raw.slice(0, -1) : raw;

  if (/^\s*along:\s*\[/.test(line)) inAlong = true;
  else if (inAlong && /^\s*\],?\s*$/.test(line)) inAlong = false;
  if (!inAlong) return raw;

  // An along entry with no stopId yet: `  { th: "...", en: "..." },`
  const m = line.match(/^(\s*\{ th: .*?, en: "([^"]*)")( \},?)$/);
  if (!m) return raw;
  const [, head, en, tail] = m;
  if (isTransit(en)) return raw;
  const id = matchStop(en);
  if (!id) return raw;
  linked++;
  report.push(`  + [${id}] ${en}`);
  return `${head}, stopId: "${id}"${tail}${cr}`;
});

console.log(report.join("\n"));
console.log(`\n${dry ? "[dry] would link" : "Linked"} ${linked} along line(s).`);
if (!dry) writeFileSync(FILE, out.join("\n"));
