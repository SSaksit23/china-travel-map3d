import { useTranslation } from "react-i18next";
import {
  AlertTriangle,
  Car,
  Check,
  Hotel,
  MapPin,
  Mountain,
  Plane,
  Quote,
  Repeat,
  Star,
  Sun,
  Thermometer,
  TrainFront,
  Users,
  X,
} from "lucide-react";
import type { ItineraryDay, Lang, Program, ProgramHotel, TransportMode } from "../types";
import { getRegion } from "../data/regions";
import { getStop } from "../data/stops";
import { getDayRoute, getLegs, seasonTemp } from "../data/media";
import { orderedStopIds } from "../lib/program";
import { L } from "../lib/localize";
import SeasonBadge from "./SeasonBadge";

type Props = {
  program: Program;
  lang: Lang;
  onSelectStop?: (stopId: string) => void;
  /** Highlight a flight's airports on the map (ordered IATA codes). */
  onFocusFlight?: (airports: string[]) => void;
  /** Currently focused flight (to mark the active flight + toggle). */
  focusedFlight?: string[] | null;
  /** Zoom the map to a single itinerary day (toggle). */
  onFocusDay?: (day: number) => void;
  /** Currently focused itinerary day number (to mark the active day + toggle). */
  focusedDay?: number | null;
  onClose: () => void;
};

/** True when two airport sequences are identical. */
const sameAirports = (a: string[] | null | undefined, b: string[]) =>
  !!a && a.length === b.length && a.every((x, i) => x === b[i]);

/** Keyless Trip.com search link for a named hotel. */
const hotelSearchUrl = (name: string) =>
  `https://www.trip.com/hotels/list?keyword=${encodeURIComponent(name)}`;

/** Format a duration in minutes as a localized "Xh Ym". */
function fmtDuration(minutes: number, thai: boolean): string {
  const h = Math.floor(minutes / 60);
  const m = Math.round(minutes % 60);
  if (thai) {
    if (h && m) return `${h} ชม. ${m} นาที`;
    if (h) return `${h} ชม.`;
    return `${m} นาที`;
  }
  if (h && m) return `${h}h ${m}m`;
  if (h) return `${h}h`;
  return `${m}m`;
}

const ModeIcon = ({ mode, size = 12 }: { mode: TransportMode; size?: number }) =>
  mode === "flight" ? (
    <Plane size={size} />
  ) : mode === "train" ? (
    <TrainFront size={size} />
  ) : (
    <Car size={size} />
  );

export default function ProgramCard({
  program,
  lang,
  onSelectStop,
  onFocusFlight,
  focusedFlight,
  onFocusDay,
  focusedDay,
  onClose,
}: Props) {
  const { t } = useTranslation();
  const thai = lang === "th";
  const region = getRegion(program.regionId);
  const color = region?.color ?? "#1565c0";
  const stops = orderedStopIds(program);
  const legs = getLegs(program.id);
  const hasItinerary = !!program.itinerary && program.itinerary.length > 0;

  const diffLabel =
    program.difficulty === "easy"
      ? t("diffEasy")
      : program.difficulty === "moderate"
        ? t("diffModerate")
        : t("diffHigh");
  const diffColor =
    program.difficulty === "easy"
      ? "#2e7d32"
      : program.difficulty === "moderate"
        ? "#bf8f00"
        : "#c0392b";

  return (
    <div className={`flex h-full flex-col ${thai ? "lang-th" : ""}`}>
      {/* Header */}
      <div className="relative px-4 pb-3 pt-4 text-white" style={{ backgroundColor: color }}>
        <button
          type="button"
          onClick={onClose}
          aria-label={t("close")}
          className="absolute right-3 top-3 rounded-full bg-white/20 p-1 hover:bg-white/30"
        >
          <X size={16} />
        </button>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
          {region ? L(region.name, lang) : ""} · {program.id}
        </p>
        <h2 className="mt-1 pr-6 text-lg font-bold leading-snug">{L(program.title, lang)}</h2>
        <p className="mt-1 text-sm text-white/90">{L(program.oneLiner, lang)}</p>
        <div className="mt-2.5 flex flex-wrap gap-1.5 text-[11px] font-semibold">
          <Badge>
            {program.days} {t("days")}
            {program.nights ? ` / ${program.nights} ${t("nights")}` : ""}
          </Badge>
          <Badge>
            <Plane size={11} /> {program.airline} · {L(program.via, lang)}
          </Badge>
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
        {/* Season + altitude/difficulty */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <InfoTile icon={<Sun size={14} />} title={t("season_label")}>
            <span className="mb-1 flex flex-wrap items-center gap-1">
              <SeasonBadge months={program.months} lang={lang} />
            </span>
            {L(program.bestMonths, lang)}
          </InfoTile>
          <InfoTile
            icon={<Mountain size={14} />}
            title={t("altitude")}
            accent={diffColor}
            tag={diffLabel}
          >
            {L(program.altitudeNote, lang)}
          </InfoTile>
        </div>

        {/* Day-by-day itinerary (attractions along the way + per-day hotel) */}
        {hasItinerary ? (
          <Section title={t("itinerary")}>
            <p className="mb-1.5 flex items-center gap-1 text-[11px] text-muted">
              <MapPin size={11} /> {t("tapDayHint")}
            </p>
            <ol className="relative ml-1">
              {program.itinerary!.map((d, i) => {
                const isLast = i === program.itinerary!.length - 1;
                return (
                  <DayRow
                    key={d.day}
                    programId={program.id}
                    day={d}
                    lang={lang}
                    color={color}
                    months={program.months}
                    isLast={isLast}
                    active={focusedDay === d.day}
                    onFocusDay={onFocusDay}
                  />
                );
              })}
            </ol>
          </Section>
        ) : (
        <Section title={t("itinerary")}>
          <ol className="relative ml-1">
            {stops.map((stopId, i) => {
              const stop = getStop(stopId);
              const leg = legs[i]; // connects stop i -> stop i+1
              const temp = seasonTemp(stopId, program.months);
              const isLast = i === stops.length - 1;
              return (
                <li key={`${stopId}-${i}`} className="relative pl-7">
                  {/* vertical connector line */}
                  {!isLast && (
                    <span
                      className="absolute left-[10px] top-5 h-[calc(100%-4px)] w-0.5"
                      style={{ backgroundColor: color, opacity: 0.25 }}
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => onSelectStop?.(stopId)}
                    className="absolute left-0 top-0.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {i + 1}
                  </button>
                  <div className="pb-3">
                    <button
                      type="button"
                      onClick={() => onSelectStop?.(stopId)}
                      className="text-left text-sm font-semibold text-ink hover:underline"
                    >
                      {stop ? L(stop.name, lang) : stopId}
                    </button>
                    {temp && (
                      <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-paper px-1.5 py-0.5 text-[10px] font-semibold">
                        <Thermometer size={10} className="text-diff-high" />
                        <span className="text-diff-high">{temp.hi}°</span>
                        <span className="text-muted">/</span>
                        <span className="text-region-north">{temp.lo}°</span>
                      </span>
                    )}
                    {leg && (
                      <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted">
                        <span className="font-semibold text-ink/70">
                          {t("day")} {i + 1}
                        </span>
                        <span className="inline-flex items-center text-ink/60">
                          <ModeIcon mode={leg.mode} size={11} />
                        </span>
                        <span>
                          {leg.km} km · {fmtDuration(leg.minutes, thai)}
                        </span>
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </Section>
        )}

        {/* Flights — click to highlight the route on the map */}
        {program.flights && program.flights.length > 0 && (
          <Section title={t("flights")}>
            <p className="mb-1.5 flex items-center gap-1 text-[11px] text-muted">
              <MapPin size={11} /> {t("showFlightOnMap")}
            </p>
            <ul className="space-y-2">
              {program.flights.map((f, i) => {
                const active = sameAirports(focusedFlight, f.airports);
                return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => onFocusFlight?.(f.airports)}
                    aria-pressed={active}
                    className={`w-full rounded-lg border bg-white p-2.5 text-left transition hover:border-current hover:shadow-card ${
                      active ? "border-current shadow-card ring-1 ring-current" : "border-line"
                    }`}
                    style={{ color }}
                  >
                    <div className="mb-1 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                        <Plane size={13} style={{ color }} />
                        {f.airports.map((code, j) => (
                          <span key={j} className="flex items-center">
                            <span className="font-mono">{code}</span>
                            {j < f.airports.length - 1 && (
                              <span className="mx-1 text-muted">→</span>
                            )}
                          </span>
                        ))}
                      </span>
                      <span className="rounded-full bg-paper px-2 py-0.5 text-[10px] font-bold uppercase text-muted">
                        {t(f.direction)}
                      </span>
                    </div>
                    {f.hops && f.hops.length > 0 && (
                      <ul className="mb-1 space-y-0.5">
                        {f.hops.map((h, j) => (
                          <li
                            key={j}
                            className="flex items-center justify-between gap-2 text-[11px] text-ink/80"
                          >
                            <span className="flex items-center gap-1.5">
                              <span className="font-mono font-semibold text-ink">
                                {h.flightNo}
                              </span>
                              <span className="font-mono">
                                {h.from} → {h.to}
                              </span>
                            </span>
                            {(h.dep || h.arr) && (
                              <span className="font-mono text-muted">
                                {h.dep ?? "--"} – {h.arr ?? "--"}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className="text-xs text-ink/80">
                      {f.airline}
                      {f.duration ? ` · ${L(f.duration, lang)}` : ""}
                    </p>
                    {f.note && (
                      <p className="mt-0.5 text-[11px] font-medium" style={{ color }}>
                        {L(f.note, lang)}
                      </p>
                    )}
                    {active && (
                      <p className="mt-1 flex items-center gap-1 text-[10px] font-semibold" style={{ color }}>
                        <MapPin size={10} /> {t("tapAgainToClear")}
                      </p>
                    )}
                  </button>
                </li>
                );
              })}
            </ul>
          </Section>
        )}

        {/* Highlights */}
        <Section title={t("highlights")}>
          <ul className="space-y-1.5">
            {program.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <Check size={15} className="mt-0.5 shrink-0" style={{ color }} />
                <span>{L(h, lang)}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Who for */}
        <Section title={t("whoFor")}>
          <p className="flex gap-2 text-sm text-ink/90">
            <Users size={15} className="mt-0.5 shrink-0 text-muted" />
            <span>{L(program.whoFor, lang)}</span>
          </p>
        </Section>

        {/* Prep & cautions */}
        <Section title={t("prep")}>
          <ul className="space-y-1.5">
            {program.prep.map((p, i) => (
              <li
                key={i}
                className={`flex gap-2 rounded-lg px-2 py-1.5 text-sm ${
                  p.warn ? "bg-diff-high/10 text-diff-high" : "text-ink/90"
                }`}
              >
                {p.warn ? (
                  <AlertTriangle size={15} className="mt-0.5 shrink-0" />
                ) : (
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                )}
                <span>{L(p.text, lang)}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Selling script */}
        <div
          className="rounded-xl border-l-4 bg-paper p-3"
          style={{ borderColor: color }}
        >
          <p className="mb-1 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-muted">
            <Quote size={12} /> {t("sellingScript")}
          </p>
          <p className="text-sm font-medium italic text-ink">
            {L(program.sellingScript, lang)}
          </p>
        </div>

        {/* Cross-sell */}
        <div className="flex gap-2 rounded-xl bg-ink/5 p-3 text-xs text-ink/80">
          <Repeat size={14} className="mt-0.5 shrink-0 text-muted" />
          <span>
            <span className="font-bold">{t("crossSell")}: </span>
            {L(program.crossSell, lang)}
          </span>
        </div>
      </div>
    </div>
  );
}

function DayRow({
  programId,
  day,
  lang,
  color,
  months,
  isLast,
  active,
  onFocusDay,
}: {
  programId: string;
  day: ItineraryDay;
  lang: Lang;
  color: string;
  months: number[];
  isLast: boolean;
  active: boolean;
  onFocusDay?: (day: number) => void;
}) {
  const { t } = useTranslation();
  const thai = lang === "th";
  const anchor = day.stops?.[0];
  const temp = anchor ? seasonTemp(anchor, months) : null;
  const focusable = !!onFocusDay && !!day.stops?.length;
  const route = getDayRoute(programId, day.day);
  const travelKm = route?.km ?? 0;
  return (
    <li className="relative pl-7">
      {!isLast && (
        <span
          className="absolute left-[10px] top-5 h-[calc(100%-4px)] w-0.5"
          style={{ backgroundColor: color, opacity: 0.25 }}
        />
      )}
      <span
        className="absolute left-0 top-0.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
        style={{ backgroundColor: color, boxShadow: active ? `0 0 0 3px ${color}40` : undefined }}
      >
        {day.day}
      </span>
      <div className="pb-3.5">
        <button
          type="button"
          onClick={() => focusable && onFocusDay?.(day.day)}
          aria-pressed={active}
          disabled={!focusable}
          className={`-mx-1.5 block w-[calc(100%+0.75rem)] rounded-lg px-1.5 py-1 text-left transition ${
            focusable ? "hover:bg-paper" : "cursor-default"
          } ${active ? "bg-paper ring-1" : ""}`}
          style={active ? { boxShadow: `inset 0 0 0 1px ${color}` } : undefined}
        >
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wide text-muted">
              {t("day")} {day.day}
            </span>
            {temp && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-1.5 py-0.5 text-[10px] font-semibold">
                <Thermometer size={10} className="text-diff-high" />
                <span className="text-diff-high">{temp.hi}°</span>
                <span className="text-muted">/</span>
                <span className="text-region-north">{temp.lo}°</span>
              </span>
            )}
          </div>
          <span className="mt-0.5 block text-sm font-semibold text-ink">{L(day.title, lang)}</span>
        </button>
        {day.along.length > 0 && (
          <ul className="mt-1 space-y-0.5">
            {day.along.map((a, i) => (
              <li key={i} className="flex gap-1.5 text-[12px] leading-snug text-ink/80">
                <span
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span>{L(a, lang)}</span>
              </li>
            ))}
          </ul>
        )}
        {travelKm > 0 && route && (
          <p className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 rounded-lg bg-paper px-2 py-1 text-[11px]">
            <span className="inline-flex items-center" style={{ color }}>
              <ModeIcon mode={route.mode} size={12} />
            </span>
            {day.drive && <span className="font-medium text-ink/80">{L(day.drive, lang)}</span>}
            <span className="font-semibold text-ink">
              {route.km} km · {fmtDuration(route.minutes, thai)}
            </span>
          </p>
        )}
        {day.hotel && <HotelLine hotel={day.hotel} lang={lang} />}
        {active && (
          <p className="mt-1 flex items-center gap-1 text-[10px] font-semibold" style={{ color }}>
            <MapPin size={10} /> {t("tapDayAgain")}
          </p>
        )}
      </div>
    </li>
  );
}

function HotelLine({ hotel, lang }: { hotel: ProgramHotel; lang: Lang }) {
  const { t } = useTranslation();
  return (
    <a
      href={hotelSearchUrl(hotel.name)}
      target="_blank"
      rel="noreferrer noopener"
      className="group mt-1.5 flex items-start gap-1.5 rounded-lg bg-paper px-2 py-1.5 text-[11px] hover:bg-ink/5"
    >
      <Hotel size={12} className="mt-0.5 shrink-0 text-region-north" />
      <span className="min-w-0">
        <span className="font-semibold text-muted">{t("hotelLabel")}: </span>
        <span className="font-semibold text-ink group-hover:underline">{hotel.name}</span>
        {hotel.star ? (
          <span className="ml-1 inline-flex items-center text-amber-500">
            {hotel.star}
            <Star size={9} className="ml-0.5 fill-amber-400 text-amber-400" />
          </span>
        ) : null}
        {hotel.note && <span className="text-muted"> · {L(hotel.note, lang)}</span>}
      </span>
    </a>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5">
      {children}
    </span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="mb-1.5 text-[11px] font-bold uppercase tracking-wide text-muted">
        {title}
      </h3>
      {children}
    </section>
  );
}

function InfoTile({
  icon,
  title,
  children,
  accent,
  tag,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  accent?: string;
  tag?: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-white p-2.5">
      <div className="mb-0.5 flex items-center justify-between">
        <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-muted">
          {icon} {title}
        </span>
        {tag && (
          <span
            className="rounded-full px-1.5 py-0.5 text-[10px] font-bold text-white"
            style={{ backgroundColor: accent }}
          >
            {tag}
          </span>
        )}
      </div>
      <p className="text-xs text-ink/90">{children}</p>
    </div>
  );
}
