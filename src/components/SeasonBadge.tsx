import { CalendarRange, Flower2, Leaf, Snowflake, Sun } from "lucide-react";
import type { Lang } from "../types";
import {
  type SeasonId,
  SEASON_COLOR,
  SEASON_LABEL,
  dominantSeasons,
  isYearRound,
  monthRangeLabel,
} from "../lib/season";
import { L } from "../lib/localize";

const SeasonIcon = ({ season, size = 12 }: { season: SeasonId; size?: number }) =>
  season === "winter" ? (
    <Snowflake size={size} />
  ) : season === "summer" ? (
    <Sun size={size} />
  ) : season === "autumn" ? (
    <Leaf size={size} />
  ) : (
    <Flower2 size={size} />
  );

/**
 * Seasonal theme tag for a program's travel window.
 * - `compact` (used in lists): a small row of season icons only.
 * - default (used in the card): icon + season label pills, plus the month range.
 */
export default function SeasonBadge({
  months,
  lang,
  compact = false,
}: {
  months: number[];
  lang: Lang;
  compact?: boolean;
}) {
  const seasons = dominantSeasons(months);
  if (!seasons.length) return null;
  const yearRound = isYearRound(months);

  if (compact) {
    return (
      <span className="inline-flex items-center gap-1" title={monthRangeLabel(months)}>
        {seasons.map((s) => (
          <span
            key={s}
            className="inline-flex h-4 w-4 items-center justify-center rounded-full text-white"
            style={{ backgroundColor: SEASON_COLOR[s] }}
          >
            <SeasonIcon season={s} size={9} />
          </span>
        ))}
      </span>
    );
  }

  const shown = yearRound ? seasons.slice(0, 3) : seasons;
  return (
    <span className="inline-flex flex-wrap items-center gap-1">
      {shown.map((s) => (
        <span
          key={s}
          className="inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] font-bold text-white"
          style={{ backgroundColor: SEASON_COLOR[s] }}
        >
          <SeasonIcon season={s} size={10} />
          {L(SEASON_LABEL[s], lang)}
        </span>
      ))}
      {yearRound && (
        <span className="inline-flex items-center gap-1 rounded-full bg-ink/70 px-1.5 py-0.5 text-[10px] font-bold text-white">
          <CalendarRange size={10} />
          {lang === "th" ? "หลายฤดู" : "Multi-season"}
        </span>
      )}
    </span>
  );
}
