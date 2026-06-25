import { useTranslation } from "react-i18next";
import { Plane, Calendar } from "lucide-react";
import type { Lang, Program } from "../types";
import { regions } from "../data/regions";
import { L } from "../lib/localize";
import SeasonBadge from "./SeasonBadge";

type Props = {
  programs: Program[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  lang: Lang;
};

export default function ProgramList({ programs, selectedId, onSelect, lang }: Props) {
  const { t } = useTranslation();
  const thai = lang === "th";

  if (programs.length === 0) {
    return (
      <p className={`px-1 py-6 text-center text-sm text-muted ${thai ? "lang-th" : ""}`}>
        {t("noResults")}
      </p>
    );
  }

  return (
    <div className={`space-y-4 ${thai ? "lang-th" : ""}`}>
      {regions.map((region) => {
        const group = programs.filter((p) => p.regionId === region.id);
        if (group.length === 0) return null;
        return (
          <section key={region.id}>
            <div className="mb-1.5 flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: region.color }}
              />
              <h3 className="text-xs font-bold uppercase tracking-wide text-muted">
                {L(region.name, lang)}
              </h3>
            </div>
            <ul className="space-y-1.5">
              {group.map((p) => {
                const active = p.id === selectedId;
                return (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={() => onSelect(p.id)}
                      className={`w-full rounded-xl border p-2.5 text-left transition ${
                        active
                          ? "border-transparent shadow-card"
                          : "border-line bg-white hover:border-ink/20 hover:shadow-panel"
                      }`}
                      style={
                        active
                          ? { backgroundColor: region.color, color: "#fff" }
                          : undefined
                      }
                    >
                      <div className="flex items-start gap-2">
                        <span
                          className="mt-0.5 h-full w-1 shrink-0 rounded-full"
                          style={{ backgroundColor: active ? "#ffffff" : region.color }}
                        />
                        <div className="min-w-0 flex-1">
                          <p
                            className={`text-[10px] font-bold uppercase tracking-wider ${
                              active ? "text-white/80" : "text-muted"
                            }`}
                          >
                            {p.id}
                          </p>
                          <p className="text-sm font-semibold leading-snug">
                            {L(p.title, lang)}
                          </p>
                          <div
                            className={`mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] ${
                              active ? "text-white/85" : "text-muted"
                            }`}
                          >
                            <span className="inline-flex items-center gap-1">
                              <Calendar size={11} /> {p.days} {t("days")}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Plane size={11} /> {p.airline}
                            </span>
                            <SeasonBadge months={p.months} lang={lang} compact />
                          </div>
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
