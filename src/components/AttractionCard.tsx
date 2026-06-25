import { useTranslation } from "react-i18next";
import { ExternalLink, ImageOff, Hotel, Star, Thermometer, X } from "lucide-react";
import type { HotelInfo, Lang, ProgramHotel, StopCategory } from "../types";
import { getStop } from "../data/stops";
import { getHotels, getImage, seasonTemp } from "../data/media";
import { monthRangeLabel } from "../lib/season";
import { L } from "../lib/localize";

type Props = {
  stopId: string;
  lang: Lang;
  /** Months used to summarise the seasonal temperature (e.g. program months). */
  months: number[];
  /** Hotel named in the selected program for this city (shown in English). */
  programHotel?: ProgramHotel;
  onClose: () => void;
};

/** Keyless Trip.com search link for a named hotel. */
const hotelSearchUrl = (name: string) =>
  `https://www.trip.com/hotels/list?keyword=${encodeURIComponent(name)}`;

const categoryColor: Record<StopCategory, string> = {
  city: "#1565c0",
  nature: "#0e7c7b",
  heritage: "#b07d2b",
  temple: "#6a3d9a",
  border: "#c0392b",
};

const categoryKey: Record<StopCategory, string> = {
  city: "catCity",
  nature: "catNature",
  heritage: "catHeritage",
  temple: "catTemple",
  border: "catBorder",
};

export default function AttractionCard({ stopId, lang, months, programHotel, onClose }: Props) {
  const { t } = useTranslation();
  const stop = getStop(stopId);
  if (!stop) return null;

  const media = getImage(stopId);
  const tempMonths = months.length ? months : [6, 7, 8, 9];
  const temp = seasonTemp(stopId, tempMonths);
  const tempRange = monthRangeLabel(tempMonths);
  // Prefer the hotel the program actually books; fall back to Ctrip picks.
  const hotels = programHotel ? [] : getHotels(stopId);
  const cat = stop.category;
  const catColor = cat ? categoryColor[cat] : "#1565c0";

  const description = stop.blurb
    ? L(stop.blurb, lang)
    : media?.extract ?? "";

  return (
    <div className={`overflow-hidden rounded-2xl bg-white shadow-card ${lang === "th" ? "lang-th" : ""}`}>
      {/* Photo */}
      <div className="relative h-44 w-full bg-line">
        {media?.thumb ? (
          <img
            src={media.full ?? media.thumb}
            alt={L(stop.name, lang)}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-1 text-white"
            style={{ backgroundColor: catColor }}
          >
            <ImageOff size={22} />
            <span className="text-[11px] opacity-90">{t("noImage")}</span>
          </div>
        )}
        <button
          type="button"
          onClick={onClose}
          aria-label={t("close")}
          className="absolute right-2 top-2 rounded-full bg-black/40 p-1 text-white hover:bg-black/60"
        >
          <X size={16} />
        </button>
        {cat && (
          <span
            className="absolute bottom-2 left-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow"
            style={{ backgroundColor: catColor }}
          >
            {t(categoryKey[cat])}
          </span>
        )}
      </div>

      <div className="space-y-2.5 p-3.5">
        <div>
          <h3 className="text-base font-bold leading-tight text-ink">{L(stop.name, lang)}</h3>
          {stop.name.zh && <p className="text-xs text-muted">{stop.name.zh}</p>}
        </div>

        {description && (
          <p className="text-sm leading-relaxed text-ink/85">{description}</p>
        )}

        {temp && (
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 rounded-lg bg-paper px-2.5 py-1.5 text-xs">
            <Thermometer size={14} className="shrink-0 text-diff-high" />
            <span className="font-semibold text-ink">{t("avgTempRange")}</span>
            {tempRange && <span className="font-medium text-muted">({tempRange})</span>}
            <span className="font-bold text-diff-high">{temp.hi}°</span>
            <span className="text-muted">/</span>
            <span className="font-bold text-region-north">{temp.lo}°</span>
          </div>
        )}

        {programHotel && (
          <div className="space-y-1.5 border-t border-line pt-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-ink">
              <Hotel size={13} className="text-region-north" />
              {t("hotelInProgram")}
            </div>
            <a
              href={hotelSearchUrl(programHotel.name)}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-start gap-1.5 rounded-lg bg-paper px-2 py-1.5 text-xs hover:bg-ink/5"
            >
              <span className="min-w-0">
                <span className="font-semibold text-ink group-hover:underline">
                  {programHotel.name}
                </span>
                {programHotel.star ? (
                  <span className="ml-1 inline-flex items-center text-amber-500">
                    {programHotel.star}
                    <Star size={9} className="ml-0.5 fill-amber-400 text-amber-400" />
                  </span>
                ) : null}
                {programHotel.note && (
                  <span className="text-muted"> · {L(programHotel.note, lang)}</span>
                )}
                <ExternalLink size={10} className="ml-1 inline shrink-0 text-muted" />
              </span>
            </a>
          </div>
        )}

        {hotels.length > 0 && (
          <div className="space-y-2 border-t border-line pt-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-ink">
              <Hotel size={13} className="text-region-north" />
              {t("hotelsTitle")}
            </div>
            <ul className="space-y-1.5">
              {hotels.map((h) => (
                <HotelRow key={h.id} hotel={h} lang={lang} reviewsLabel={t("reviews")} />
              ))}
            </ul>
            <p className="text-[10px] text-muted">{t("hotelsSource")}</p>
          </div>
        )}

        {media?.sourceUrl && (
          <a
            href={media.sourceUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-muted hover:text-ink"
          >
            <ExternalLink size={11} />
            {t("photoCredit")}: {media.credit ?? "Wikimedia"}
          </a>
        )}
      </div>
    </div>
  );
}

function HotelRow({
  hotel,
  lang,
  reviewsLabel,
}: {
  hotel: HotelInfo;
  lang: Lang;
  reviewsLabel: string;
}) {
  const title = lang === "en" && hotel.nameEn ? hotel.nameEn : hotel.name;
  const reviewCount = Number((hotel.reviews || "").replace(/[^0-9]/g, "")) || 0;
  return (
    <li>
      <a
        href={hotel.url}
        target="_blank"
        rel="noreferrer noopener"
        className="group flex gap-2 rounded-lg p-1 hover:bg-paper"
      >
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md bg-line">
          {hotel.image && (
            <img
              src={hotel.image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <p className="truncate text-xs font-semibold text-ink group-hover:underline">
              {title}
            </p>
            <ExternalLink size={10} className="shrink-0 text-muted" />
          </div>
          <div className="mt-0.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[10px] text-muted">
            {hotel.star ? (
              <span className="inline-flex items-center text-amber-500">
                {hotel.star}
                <Star size={9} className="ml-0.5 fill-amber-400 text-amber-400" />
              </span>
            ) : null}
            {hotel.score && (
              <span className="font-bold text-region-north">
                {hotel.score}
                {hotel.scoreDesc ? ` ${hotel.scoreDesc}` : ""}
              </span>
            )}
            {reviewCount > 0 && (
              <span>
                {reviewCount.toLocaleString()} {reviewsLabel}
              </span>
            )}
          </div>
          {hotel.area && <p className="truncate text-[10px] text-muted">{hotel.area}</p>}
        </div>
      </a>
    </li>
  );
}
