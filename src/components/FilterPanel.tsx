import { useTranslation } from "react-i18next";
import { RotateCcw } from "lucide-react";
import type { Lang, RegionId } from "../types";
import { regions } from "../data/regions";
import { L } from "../lib/localize";
import { type Filters, emptyFilters, isFilterActive } from "../lib/filter";
import { SEASON_COLOR, SEASON_LABEL, SEASON_ORDER, type SeasonId } from "../lib/season";

type Props = {
  filters: Filters;
  setFilters: (f: Filters) => void;
  lang: Lang;
  resultCount: number;
};

export default function FilterPanel({ filters, setFilters, lang, resultCount }: Props) {
  const { t } = useTranslation();
  const thai = lang === "th";

  const patch = (p: Partial<Filters>) => setFilters({ ...filters, ...p });

  return (
    <div className={`space-y-4 ${thai ? "lang-th" : ""}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-ink">{t("filtersTitle")}</h2>
        {isFilterActive(filters) && (
          <button
            type="button"
            onClick={() => setFilters({ ...emptyFilters })}
            className="inline-flex items-center gap-1 text-xs font-semibold text-region-north hover:underline"
          >
            <RotateCcw size={13} /> {t("clearFilters")}
          </button>
        )}
      </div>

      {/* Region chips */}
      <div>
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted">
          {t("region")}
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Chip
            active={filters.region === "all"}
            onClick={() => patch({ region: "all" })}
            label={t("allRegions")}
          />
          {regions.map((r) => (
            <Chip
              key={r.id}
              active={filters.region === r.id}
              onClick={() => patch({ region: r.id as RegionId })}
              label={L(r.name, lang)}
              color={r.color}
            />
          ))}
        </div>
      </div>

      {/* Season chips */}
      <div>
        <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted">
          {t("seasonFilter")}
        </p>
        <div className="flex flex-wrap gap-1.5">
          <Chip
            active={filters.season === "all"}
            onClick={() => patch({ season: "all" })}
            label={t("seasonAll")}
          />
          {SEASON_ORDER.map((s) => (
            <Chip
              key={s}
              active={filters.season === s}
              onClick={() => patch({ season: s as SeasonId })}
              label={L(SEASON_LABEL[s], lang)}
              color={SEASON_COLOR[s]}
            />
          ))}
        </div>
      </div>

      <p className="text-xs font-semibold text-muted">
        {t("resultsCount", { count: resultCount })}
      </p>
    </div>
  );
}

function Chip({
  active,
  onClick,
  label,
  color,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  color?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold transition ${
        active
          ? "border-transparent text-white"
          : "border-line bg-white text-ink/80 hover:border-ink/30"
      }`}
      style={active ? { backgroundColor: color ?? "#1f2937" } : undefined}
    >
      {color && (
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: active ? "#fff" : color }}
        />
      )}
      {label}
    </button>
  );
}
