import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { MapPin } from "lucide-react";
import type { Lang, MapLayers } from "./types";
import { programs as allPrograms } from "./data/programs";
import { programHotelForStop } from "./lib/program";
import { getDayRoute } from "./data/media";
import { type Filters, emptyFilters, filterPrograms } from "./lib/filter";
import { SEASON_MONTHS } from "./lib/season";
import TopBar from "./components/TopBar";
import FilterPanel from "./components/FilterPanel";
import ProgramList from "./components/ProgramList";
import ProgramCard from "./components/ProgramCard";
import AttractionCard from "./components/AttractionCard";
import LayersControl from "./components/LayersControl";
import MapView from "./components/MapView";

const DEFAULT_LAYERS: MapLayers = {
  railways: false,
  airports: false,
  attractions: false,
  // 3D terrain + building extrusions are heavy (DEM tiles + extra draw calls);
  // start flat for fast load and let the user opt in via the Layers control.
  buildings3d: false,
  terrain3d: false,
};

export default function App() {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState<Lang>("th");
  const [panelOpen, setPanelOpen] = useState(true);
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [layers, setLayers] = useState<MapLayers>(DEFAULT_LAYERS);
  const [selectedAttractionId, setSelectedAttractionId] = useState<string | null>(null);
  const [focusedFlight, setFocusedFlight] = useState<string[] | null>(null);
  const [focusedDay, setFocusedDay] = useState<number | null>(null);

  const toggleLang = () => {
    const next: Lang = lang === "th" ? "en" : "th";
    setLang(next);
    i18n.changeLanguage(next);
  };

  const toggleLayer = (key: keyof MapLayers) =>
    setLayers((prev) => ({ ...prev, [key]: !prev[key] }));

  const filtered = useMemo(() => filterPrograms(allPrograms, filters), [filters]);

  // Drop the selection if the active filters hide it.
  useEffect(() => {
    if (selectedId && !filtered.some((p) => p.id === selectedId)) {
      setSelectedId(null);
    }
  }, [filtered, selectedId]);

  const selected = filtered.find((p) => p.id === selectedId) ?? null;
  const thai = lang === "th";

  // Clear any map focus (flight arc / single day) when the selection changes.
  useEffect(() => {
    setFocusedFlight(null);
    setFocusedDay(null);
  }, [selectedId]);

  // The resolved geography for a focused itinerary day: the precomputed,
  // road-snapped route from the previous night's city through the day's stops
  // to where the group spends the night.
  const focusedDayInfo = useMemo(() => {
    if (focusedDay == null || !selected) return null;
    const route = getDayRoute(selected.id, focusedDay);
    if (!route || !route.stops.length) return null;
    return { day: focusedDay, stops: route.stops, nightStopId: route.night, line: route.line };
  }, [focusedDay, selected]);

  // Temperature context for the attraction card: the selected program's
  // travel months; otherwise the chosen season's months, or a summer default.
  const attractionMonths =
    selected?.months ??
    (filters.season !== "all" ? SEASON_MONTHS[filters.season] : [6, 7, 8, 9]);
  const attractionHotel = selectedAttractionId
    ? programHotelForStop(selected, selectedAttractionId)
    : undefined;

  return (
    <div className="flex h-full flex-col bg-paper">
      <TopBar
        lang={lang}
        onToggleLang={toggleLang}
        onTogglePanel={() => setPanelOpen((v) => !v)}
        panelOpen={panelOpen}
      />

      <div className="relative flex-1 overflow-hidden">
        {/* Map fills the area */}
        <div className="absolute inset-0">
          <MapView
            programs={filtered}
            selectedId={selectedId}
            onSelect={(id) => setSelectedId((cur) => (cur === id ? null : id))}
            layers={layers}
            onSelectAttraction={(stopId) => setSelectedAttractionId(stopId)}
            focusedStopId={selectedAttractionId}
            focusedFlight={focusedFlight}
            focusedDay={focusedDayInfo}
            panelOpen={panelOpen}
            cardOpen={!!selected}
            lang={lang}
          />
        </div>

        {/* Layers control (floating, clears the left panel when open) */}
        <div
          className={`absolute top-3 z-20 transition-[left] ${
            panelOpen ? "left-[23rem]" : "left-3"
          }`}
        >
          <LayersControl layers={layers} onToggle={toggleLayer} lang={lang} />
        </div>

        {/* Left: filters + program list */}
        {panelOpen && (
          <aside className="absolute inset-y-0 left-0 z-10 flex w-full max-w-[22rem] animate-slideIn flex-col border-r border-line bg-paper/95 shadow-panel backdrop-blur sm:w-[22rem]">
            <div className="border-b border-line bg-white/70 p-4">
              <FilterPanel
                filters={filters}
                setFilters={setFilters}
                lang={lang}
                resultCount={filtered.length}
              />
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <ProgramList
                programs={filtered}
                selectedId={selectedId}
                onSelect={(id) => {
                  setSelectedId(id);
                }}
                lang={lang}
              />
            </div>
          </aside>
        )}

        {/* Right: program detail card */}
        {selected && (
          <aside className="absolute inset-y-0 right-0 z-30 w-full max-w-[24rem] animate-slideIn overflow-hidden border-l border-line bg-white shadow-card sm:w-[24rem]">
            <ProgramCard
              program={selected}
              lang={lang}
              onSelectStop={(stopId) => setSelectedAttractionId(stopId)}
              onFocusFlight={(airports) => {
                setFocusedDay(null);
                setFocusedFlight((cur) =>
                  cur &&
                  cur.length === airports.length &&
                  cur.every((x, i) => x === airports[i])
                    ? null
                    : airports
                );
              }}
              focusedFlight={focusedFlight}
              onFocusDay={(day) => {
                setFocusedFlight(null);
                setFocusedDay((cur) => (cur === day ? null : day));
              }}
              focusedDay={focusedDay}
              onClose={() => setSelectedId(null)}
            />
          </aside>
        )}

        {/* Attraction detail card (floating, bottom-left) */}
        {selectedAttractionId && (
          <div
            className={`absolute bottom-4 z-30 w-[20rem] animate-fadeIn transition-[left] ${
              panelOpen ? "left-[23rem]" : "left-3"
            }`}
          >
            <AttractionCard
              stopId={selectedAttractionId}
              lang={lang}
              months={attractionMonths}
              programHotel={attractionHotel}
              onClose={() => setSelectedAttractionId(null)}
            />
          </div>
        )}

        {/* Hint pill when nothing is selected */}
        {!selected && !selectedAttractionId && (
          <div
            className={`pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-ink/85 px-4 py-2 text-xs font-semibold text-white shadow-card ${
              thai ? "lang-th" : ""
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} /> {t("tapRouteHint")}
            </span>
          </div>
        )}

        {/* Author credit (bottom-right, above the MapLibre attribution) */}
        <div
          className={`pointer-events-none absolute bottom-6 right-2 z-10 rounded bg-white/70 px-2 py-0.5 text-[10px] font-medium text-ink/70 shadow-sm backdrop-blur ${
            thai ? "lang-th" : ""
          }`}
        >
          {t("madeBy")}
        </div>
      </div>
    </div>
  );
}
