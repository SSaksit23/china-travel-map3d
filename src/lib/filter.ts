import type { Difficulty, Program, RegionId, SegmentId } from "../types";
import { type SeasonId, monthsMatchSeason } from "./season";

export type Filters = {
  region: RegionId | "all";
  season: SeasonId | "all";
  month: number; // 0 = any month
  difficulty: Difficulty | "all";
  segment: SegmentId | "all";
  programIds: string[] | null; // narrowing from a "customer says" quick-pick
};

export const emptyFilters: Filters = {
  region: "all",
  season: "all",
  month: 0,
  difficulty: "all",
  segment: "all",
  programIds: null,
};

export function isFilterActive(f: Filters): boolean {
  return (
    f.region !== "all" ||
    f.season !== "all" ||
    f.month !== 0 ||
    f.difficulty !== "all" ||
    f.segment !== "all" ||
    f.programIds !== null
  );
}

export function filterPrograms(all: Program[], f: Filters): Program[] {
  return all.filter(
    (p) =>
      (f.region === "all" || p.regionId === f.region) &&
      (f.season === "all" || monthsMatchSeason(p.months, f.season)) &&
      (f.month === 0 || p.months.includes(f.month)) &&
      (f.difficulty === "all" || p.difficulty === f.difficulty) &&
      (f.segment === "all" || p.customerSegments.includes(f.segment)) &&
      (!f.programIds || f.programIds.includes(p.id))
  );
}
