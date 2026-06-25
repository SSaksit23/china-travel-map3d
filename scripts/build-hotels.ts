/**
 * Build-time recommended-hotel fetcher (Trip.com / Ctrip).
 *
 * For each overnight city used by the programs, call the Ctrip "search_hotels"
 * endpoint (via the parse.bot scraper), keep the best-rated 4–5★ hotels and
 * commit a compact list to src/data/media/hotels.json — so the deployed app
 * stays static and keyless (no API key shipped to the browser).
 *
 * The API key is read from CTRIP_PARSER_API (env or the local .env file).
 * Run with: npm run build:hotels
 */
import { readFileSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { HotelInfo } from "../src/types.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT_DIR = resolve(ROOT, "src/data/media");
const SCRAPER = "https://api.parse.bot/scraper/b25cb0e8-6958-4837-9980-1645cec5a4ce";
const TOP_N = 3;
const POOL = 25;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Overnight/hotel cities → Ctrip cityId. Attractions, passes and lakes are
 * intentionally omitted; nearby attractions inherit their base city's hotels
 * only when they are real cities. IDs resolved from Ctrip get_city_list.
 */
const CITY_IDS: Record<string, number> = {
  // North & West Xinjiang
  urumqi: 39,
  yining: 529,
  kuytun: 1325,
  fuyun: 255,
  burqin: 3327,
  // South Xinjiang
  kashgar: 109,
  tashkurgan: 21067,
  yarkand: 21827,
  // Gansu–Sichuan
  chengdu: 28,
  lanzhou: 100,
  xiahe: 497,
  hezuo: 21654,
  songpan: 1372,
  jiuzhaigou: 91,
  zhagana: 21668, // Diebu county
  // Qinghai–Tibet
  xining: 124,
  lhasa: 41,
  nyingchi: 108,
  // Shandong / East coast
  qingdao: 7,
  yantai: 533,
  penglai: 533, // administered by Yantai
  weihai: 479,
  // Northeast (Dongbei)
  shenyang: 451,
  benxi: 1155,
  dandong: 221,
  dalian: 6,
  lvshun: 6, // district of Dalian
  panjin: 387,
  harbin: 5,
  mudanjiang: 150,
  hengdaohezi: 1666, // Hailin
  snowtown: 1666, // Snow Town, Hailin
};

function loadApiKey(): string {
  if (process.env.CTRIP_PARSER_API) return process.env.CTRIP_PARSER_API.trim();
  try {
    const env = readFileSync(resolve(ROOT, ".env"), "utf8");
    const line = env.split(/\r?\n/).find((l) => l.trim().startsWith("CTRIP_PARSER_API"));
    if (line) return line.split("=").slice(1).join("=").trim();
  } catch {
    /* ignore */
  }
  throw new Error("CTRIP_PARSER_API not set (env or .env)");
}

type RawHotel = {
  hotelInfo?: {
    summary?: { hotelId?: string };
    nameInfo?: { name?: string; enName?: string };
    hotelStar?: { star?: number };
    hotelImages?: { url?: string };
    commentInfo?: { commentScore?: string; commentDescription?: string; commenterNumber?: string };
    positionInfo?: { positionDesc?: string; address?: string; zoneNames?: string[] };
  };
};

async function searchHotels(key: string, cityId: number): Promise<RawHotel[]> {
  const url = `${SCRAPER}/search_hotels?city_id=${cityId}&page_size=${POOL}&page_index=1`;
  let res = await fetch(url, { headers: { "X-API-Key": key } });
  for (let attempt = 0; !res.ok && attempt < 4; attempt++) {
    if (res.status !== 429 && res.status < 500) break;
    await sleep(2000 * (attempt + 1));
    res = await fetch(url, { headers: { "X-API-Key": key } });
  }
  if (!res.ok) return [];
  const j = (await res.json()) as { data?: { hotelList?: RawHotel[] } };
  return j.data?.hotelList ?? [];
}

function toHotel(raw: RawHotel, cityId: number): HotelInfo | null {
  const h = raw.hotelInfo;
  const id = h?.summary?.hotelId;
  const name = h?.nameInfo?.name;
  if (!id || !name) return null;
  const pos = h?.positionInfo;
  const area = pos?.positionDesc || pos?.zoneNames?.[0];
  return {
    id,
    name,
    nameEn: h?.nameInfo?.enName,
    star: h?.hotelStar?.star,
    score: h?.commentInfo?.commentScore,
    scoreDesc: h?.commentInfo?.commentDescription,
    reviews: h?.commentInfo?.commenterNumber,
    image: h?.hotelImages?.url,
    area,
    address: pos?.address,
    url: `https://www.trip.com/hotels/detail/?cityId=${cityId}&hotelId=${id}`,
  };
}

const MIN_REVIEWS = 100;

const scoreOf = (h: HotelInfo) => Number(h.score) || 0;
const reviewsOf = (h: HotelInfo) => Number((h.reviews || "").replace(/[^0-9]/g, "")) || 0;
/** Rank by rating first, then break ties by review volume. */
const byQuality = (a: HotelInfo, b: HotelInfo) =>
  scoreOf(b) - scoreOf(a) || reviewsOf(b) - reviewsOf(a);

function pickBest(raws: RawHotel[], cityId: number): HotelInfo[] {
  const all = raws
    .map((r) => toHotel(r, cityId))
    .filter((h): h is HotelInfo => h !== null);
  // Prefer well-reviewed 4–5★ hotels; relax progressively if a city is small.
  const tiers = [
    all.filter((h) => (h.star ?? 0) >= 4 && scoreOf(h) > 0 && reviewsOf(h) >= MIN_REVIEWS),
    all.filter((h) => scoreOf(h) > 0 && reviewsOf(h) >= MIN_REVIEWS),
    all.filter((h) => scoreOf(h) > 0),
  ];
  const pool = tiers.find((t) => t.length >= TOP_N) ?? tiers[tiers.length - 1];
  return pool.sort(byQuality).slice(0, TOP_N);
}

async function main() {
  const key = loadApiKey();
  await mkdir(OUT_DIR, { recursive: true });
  const outPath = resolve(OUT_DIR, "hotels.json");

  const out: Record<string, HotelInfo[]> = {};
  try {
    Object.assign(out, JSON.parse(await readFile(outPath, "utf8")));
  } catch {
    /* first run */
  }

  let ok = 0;
  let miss = 0;
  for (const [stopId, cityId] of Object.entries(CITY_IDS)) {
    const raws = await searchHotels(key, cityId);
    const hotels = pickBest(raws, cityId);
    if (hotels.length) {
      out[stopId] = hotels;
      ok++;
      console.log(`✓ ${stopId} (city ${cityId}) -> ${hotels.length} hotels`);
    } else {
      miss++;
      console.warn(`! ${stopId} (city ${cityId}): no hotels`);
    }
    await sleep(500);
  }

  await writeFile(outPath, JSON.stringify(out, null, 0));
  console.log(`Done: ${ok} cities with hotels, ${miss} missing.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
