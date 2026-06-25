/**
 * Build-time seasonal temperature generator.
 *
 * For every stop, query the keyless Open-Meteo historical archive (ERA5) for
 * five years of daily highs/lows and aggregate to a per-month average
 * high/low. Output: src/data/media/weather.json, committed so the app makes
 * no runtime calls. Run with: npm run build:weather
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { stops } from "../src/data/stops.ts";
import type { MonthlyTemp } from "../src/types.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "../src/data/media");
const ARCHIVE = "https://archive-api.open-meteo.com/v1/archive";
const START = "2019-01-01";
const END = "2023-12-31";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

type Archive = {
  daily?: {
    time: string[];
    temperature_2m_max: (number | null)[];
    temperature_2m_min: (number | null)[];
  };
};

async function fetchMonthly([lng, lat]: [number, number]): Promise<MonthlyTemp[] | null> {
  const url =
    `${ARCHIVE}?latitude=${lat}&longitude=${lng}` +
    `&start_date=${START}&end_date=${END}` +
    `&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
  try {
    let res = await fetch(url);
    // Open-Meteo free tier rate-limits (429) on long runs; back off and retry.
    for (let attempt = 0; !res.ok && attempt < 5; attempt++) {
      if (res.status !== 429 && res.status < 500) return null;
      await sleep(2000 * (attempt + 1));
      res = await fetch(url);
    }
    if (!res.ok) return null;
    const j = (await res.json()) as Archive;
    const d = j.daily;
    if (!d) return null;

    const hiSum = new Array(12).fill(0);
    const hiCnt = new Array(12).fill(0);
    const loSum = new Array(12).fill(0);
    const loCnt = new Array(12).fill(0);

    for (let i = 0; i < d.time.length; i++) {
      const month = Number(d.time[i].slice(5, 7)) - 1;
      const hi = d.temperature_2m_max[i];
      const lo = d.temperature_2m_min[i];
      if (hi != null) {
        hiSum[month] += hi;
        hiCnt[month]++;
      }
      if (lo != null) {
        loSum[month] += lo;
        loCnt[month]++;
      }
    }

    const months: MonthlyTemp[] = [];
    for (let m = 0; m < 12; m++) {
      if (!hiCnt[m] || !loCnt[m]) return null;
      months.push({
        m: m + 1,
        hi: Math.round(hiSum[m] / hiCnt[m]),
        lo: Math.round(loSum[m] / loCnt[m]),
      });
    }
    return months;
  } catch {
    return null;
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const outPath = resolve(OUT_DIR, "weather.json");

  // Merge with any previously-fetched data so partial runs are not lost.
  const out: Record<string, { months: MonthlyTemp[] }> = {};
  try {
    Object.assign(out, JSON.parse(await readFile(outPath, "utf8")));
  } catch {
    /* first run */
  }

  let ok = 0;
  let miss = 0;

  for (const stop of stops) {
    if (out[stop.id]) continue; // already have it
    const months = await fetchMonthly(stop.coords);
    if (months) {
      out[stop.id] = { months };
      ok++;
      console.log(`✓ ${stop.id}`);
    } else {
      miss++;
      console.warn(`! ${stop.id}: no climatology`);
    }
    await sleep(600);
  }

  await writeFile(outPath, JSON.stringify(out, null, 0));
  console.log(`Done: ${ok} new, ${miss} missing, ${Object.keys(out).length} total.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
