import type { Localized } from "../types";
import { monthKeys } from "../i18n";

export type SeasonId = "spring" | "summer" | "autumn" | "winter";

/** Calendar months that make up each meteorological season. */
export const SEASON_MONTHS: Record<SeasonId, number[]> = {
  spring: [3, 4, 5],
  summer: [6, 7, 8],
  autumn: [9, 10, 11],
  winter: [12, 1, 2],
};

export const SEASON_ORDER: SeasonId[] = ["spring", "summer", "autumn", "winter"];

export const SEASON_LABEL: Record<SeasonId, Localized> = {
  spring: { th: "ใบไม้ผลิ", en: "Spring" },
  summer: { th: "ฤดูร้อน", en: "Summer" },
  autumn: { th: "ใบไม้ร่วง", en: "Autumn" },
  winter: { th: "ฤดูหนาว", en: "Winter" },
};

/** Accent colours for the seasonal theme (kept within the app palette). */
export const SEASON_COLOR: Record<SeasonId, string> = {
  spring: "#2e9e5b",
  summer: "#e0922f",
  autumn: "#c2622d",
  winter: "#3b82c4",
};

/** Seasons a set of travel months touches (in calendar order). */
export function seasonsForMonths(months: number[]): SeasonId[] {
  return SEASON_ORDER.filter((s) => SEASON_MONTHS[s].some((m) => months.includes(m)));
}

/** Seasons ordered by how many of the travel months fall in each (descending). */
export function dominantSeasons(months: number[]): SeasonId[] {
  return seasonsForMonths(months).sort(
    (a, b) =>
      SEASON_MONTHS[b].filter((m) => months.includes(m)).length -
      SEASON_MONTHS[a].filter((m) => months.includes(m)).length
  );
}

/** True when a program's travel window includes any month of the season. */
export function monthsMatchSeason(months: number[], season: SeasonId): boolean {
  return SEASON_MONTHS[season].some((m) => months.includes(m));
}

/** A program is "year-round-ish" when it spans three or more seasons. */
export function isYearRound(months: number[]): boolean {
  return seasonsForMonths(months).length >= 3;
}

/**
 * Compact month-range label using the app's month abbreviations.
 * Handles contiguous ranges and the Dec→Feb wrap, e.g.
 * [6,7,8,9] -> "Jun–Sep", [12,1,2] -> "Dec–Feb", [4,5,9,10] -> "Apr, May, Sep, Oct".
 */
export function monthRangeLabel(months: number[]): string {
  const set = [...new Set(months)].sort((a, b) => a - b);
  if (!set.length) return "";
  const name = (m: number) => monthKeys[((m - 1) % 12 + 12) % 12];
  if (set.length === 1) return name(set[0]);

  const contiguous = (arr: number[]) =>
    arr.every((m, i) => i === 0 || m === arr[i - 1] + 1);

  if (contiguous(set)) return `${name(set[0])}–${name(set[set.length - 1])}`;

  // Try rotations to detect a wrapping range (e.g. winter Dec–Feb).
  for (let start = 1; start < set.length; start++) {
    const rot = [...set.slice(start), ...set.slice(0, start).map((m) => m + 12)];
    if (contiguous(rot)) return `${name(rot[0])}–${name(rot[rot.length - 1])}`;
  }
  return set.map(name).join(", ");
}
