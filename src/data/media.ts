import type {
  AttractionMedia,
  DayRoute,
  HotelInfo,
  LegMeta,
  LocationMedia,
  MonthlyTemp,
  RednoteMedia,
} from "../types";
import imagesJson from "./media/images.json";
import weatherJson from "./media/weather.json";
import hotelsJson from "./media/hotels.json";
import rednoteJson from "./media/rednote.json";
import mediaJson from "./media/media.json";
import legmetaJson from "./legmeta.json";
import dayroutesJson from "./dayroutes.json";

const images = imagesJson as Record<string, AttractionMedia>;
const weather = weatherJson as Record<string, { months: MonthlyTemp[] }>;
const hotels = hotelsJson as Record<string, HotelInfo[]>;
const rednote = rednoteJson as Record<string, RednoteMedia>;
const locationMedia = mediaJson as Record<string, LocationMedia>;
const legmeta = legmetaJson as Record<string, LegMeta[]>;
const dayroutes = dayroutesJson as Record<string, DayRoute[]>;

export const getImage = (stopId: string): AttractionMedia | undefined => images[stopId];

/**
 * Curated per-location media (gallery images + external video) from the unified
 * manifest src/data/media/media.json. Empty entries are placeholders to fill.
 */
export const getLocationMedia = (stopId: string): LocationMedia | undefined =>
  locationMedia[stopId];

/** Admin-curated RedNote gallery + vertical video for a stop (build-rednote.ts). */
export const getRednote = (stopId: string): RednoteMedia | undefined => rednote[stopId];

export const getMonthlyTemps = (stopId: string): MonthlyTemp[] | undefined =>
  weather[stopId]?.months;

/** Recommended Trip.com hotels for a stop's city (empty when none). */
export const getHotels = (stopId: string): HotelInfo[] => hotels[stopId] ?? [];

export const getLegs = (programId: string): LegMeta[] => legmeta[programId] ?? [];

/** Per-day road-snapped route for a program (start → stops → overnight). */
export const getDayRoute = (programId: string, day: number): DayRoute | undefined =>
  dayroutes[programId]?.find((d) => d.day === day);

/**
 * Average high/low across a set of months (e.g. a program's travel months).
 * Returns null when no data is available.
 */
export function seasonTemp(
  stopId: string,
  months: number[]
): { hi: number; lo: number } | null {
  const all = getMonthlyTemps(stopId);
  if (!all || !months.length) return null;
  const picked = all.filter((t) => months.includes(t.m));
  if (!picked.length) return null;
  const hi = Math.round(picked.reduce((s, t) => s + t.hi, 0) / picked.length);
  const lo = Math.round(picked.reduce((s, t) => s + t.lo, 0) / picked.length);
  return { hi, lo };
}
