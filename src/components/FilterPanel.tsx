import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp, RotateCcw } from "lucide-react";
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

  // Collapsed state is a per-viewer convenience; remembered when storage allows.
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem(COLLAPSE_KEY) === "1";
    } catch {
      return false;
    }
  });
  const toggleCollapsed = () => {
    const next = !collapsed;
    setCollapsed(next);
    try {
      localStorage.setItem(COLLAPSE_KEY, next ? "1" : "0");
    } catch {
      /* storage blocked — keep in-memory state only */
    }
  };

  const activeRegion = regions.find((r) => r.id === filters.region);
  const activeSeason = filters.season !== "all" ? filters.season : null;

  return (
    <div className={`${collapsed ? "space-y-2" : "space-y-4"} ${thai ? "lang-th" : ""}`}>
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={toggleCollapsed}
          aria-expanded={!collapsed}
          aria-label={collapsed ? t("showFilters") : t("hideFilters")}
          title={collapsed ? t("showFilters") : t("hideFilters")}
          className="group inline-flex min-w-0 items-center gap-1.5 text-left"
        >
          <h2 className="truncate text-sm font-bold text-ink">{t("filtersTitle")}</h2>
          <span className="rounded-full border border-line bg-white p-0.5 text-muted group-hover:border-ink/30 group-hover:text-ink">
            {collapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
          </span>
        </button>
        {isFilterActive(filters) && (
          <button
            type="button"
            onClick={() => setFilters({ ...emptyFilters })}
            className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-region-north hover:underline"
          >
            <RotateCcw size={13} /> {t("clearFilters")}
          </button>
        )}
      </div>

      {collapsed ? (
        // Minimised: one line with the active selections + result count.
        <div className="flex flex-wrap items-center gap-1.5">
          {activeRegion && (
            <Chip
              active
              onClick={toggleCollapsed}
              label={L(activeRegion.name, lang)}
              color={activeRegion.color}
            />
          )}
          {activeSeason && (
            <Chip
              active
              onClick={toggleCollapsed}
              label={L(SEASON_LABEL[activeSeason], lang)}
              color={SEASON_COLOR[activeSeason]}
            />
          )}
          <p className="text-xs font-semibold text-muted">
            {t("resultsCount", { count: resultCount })}
          </p>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

const COLLAPSE_KEY = "ctm.filtersCollapsed";

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
