import { useTranslation } from "react-i18next";
import { Languages, MountainSnow, SlidersHorizontal } from "lucide-react";
import type { Lang } from "../types";

type Props = {
  lang: Lang;
  onToggleLang: () => void;
  onTogglePanel: () => void;
  panelOpen: boolean;
};

export default function TopBar({ lang, onToggleLang, onTogglePanel, panelOpen }: Props) {
  const { t } = useTranslation();
  const thai = lang === "th";

  return (
    <header className="z-20 flex items-center justify-between gap-3 border-b border-line bg-white/95 px-3 py-2.5 backdrop-blur sm:px-5">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onTogglePanel}
          aria-label={t("filters")}
          className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-white text-ink transition hover:border-region-north hover:text-region-north lg:hidden"
        >
          <SlidersHorizontal size={18} />
        </button>
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#1f3864] text-white">
          <MountainSnow size={20} strokeWidth={2.2} />
        </span>
        <div>
          <h1 className="text-base font-extrabold leading-tight tracking-tight text-[#1f3864] sm:text-lg">
            {t("brand")}
          </h1>
          <p className={`text-xs text-muted ${thai ? "lang-th" : ""}`}>{t("appSubtitle")}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onTogglePanel}
          className="hidden items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-semibold text-ink transition hover:border-region-north hover:text-region-north lg:inline-flex"
        >
          <SlidersHorizontal size={16} />
          <span className={thai ? "lang-th" : ""}>{t("filters")}</span>
          <span className="text-muted">{panelOpen ? "‹" : "›"}</span>
        </button>
        <button
          type="button"
          onClick={onToggleLang}
          aria-label="Switch language / สลับภาษา"
          className="flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-semibold text-ink transition hover:border-region-north hover:text-region-north"
        >
          <Languages size={16} />
          <span>{thai ? "ไทย" : "EN"}</span>
        </button>
      </div>
    </header>
  );
}
