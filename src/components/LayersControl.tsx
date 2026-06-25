import { useTranslation } from "react-i18next";
import { Building2, Layers, MapPin, Mountain, Plane, TrainFront } from "lucide-react";
import type { Lang, MapLayers } from "../types";

type Props = {
  layers: MapLayers;
  onToggle: (key: keyof MapLayers) => void;
  lang: Lang;
};

const items: { key: keyof MapLayers; icon: typeof Plane; labelKey: string }[] = [
  { key: "railways", icon: TrainFront, labelKey: "railways" },
  { key: "airports", icon: Plane, labelKey: "airports" },
  { key: "attractions", icon: MapPin, labelKey: "attractions" },
  { key: "buildings3d", icon: Building2, labelKey: "buildings3d" },
  { key: "terrain3d", icon: Mountain, labelKey: "terrain3d" },
];

export default function LayersControl({ layers, onToggle, lang }: Props) {
  const { t } = useTranslation();
  return (
    <div
      className={`pointer-events-auto w-[10.5rem] rounded-xl border border-line bg-white/95 p-2 shadow-card backdrop-blur ${
        lang === "th" ? "lang-th" : ""
      }`}
    >
      <p className="mb-1.5 flex items-center gap-1.5 px-1 text-[11px] font-bold uppercase tracking-wide text-muted">
        <Layers size={12} /> {t("layers")}
      </p>
      <div className="space-y-1">
        {items.map(({ key, icon: Icon, labelKey }) => {
          const on = layers[key];
          return (
            <button
              key={key}
              type="button"
              onClick={() => onToggle(key)}
              aria-pressed={on}
              className={`flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-xs font-semibold transition-colors ${
                on ? "bg-ink text-white" : "bg-paper text-ink hover:bg-line/60"
              }`}
            >
              <Icon size={14} className="shrink-0" />
              <span className="flex-1 text-left">{t(labelKey)}</span>
              <span
                className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                  on ? "bg-emerald-300" : "bg-line"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
