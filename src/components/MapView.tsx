import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import MapGL, {
  Layer,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
  Source,
  type MapLayerMouseEvent,
  type MapRef,
} from "react-map-gl/maplibre";
import { Plane } from "lucide-react";
import type { Lang, MapLayers, Program, StopCategory } from "../types";
import { getRegion } from "../data/regions";
import { getStop, stops as allStops } from "../data/stops";
import { airports, getAirportCoords } from "../data/airports";
import { getGeometry } from "../data/geometry";
import { orderedStopIds, programBounds, modeDash, greatCircleArc } from "../lib/program";
import { L } from "../lib/localize";

/** Approximate widths of the overlay panels, used to keep routes/pins visible. */
const FILTER_PANEL_W = 352;
const PROGRAM_CARD_W = 384;

const MAP_STYLE = "https://tiles.openfreemap.org/styles/liberty";

// Keyless global elevation (Terrarium encoding) hosted on AWS Open Data.
const TERRAIN_TILES = [
  "https://elevation-tiles-prod.s3.amazonaws.com/terrarium/{z}/{x}/{y}.png",
];
const TERRAIN_MAXZOOM = 15;

const INITIAL_VIEW = {
  longitude: 92,
  latitude: 38,
  zoom: 3.4,
};

const ORM_TILES = [
  "https://a.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png",
  "https://b.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png",
  "https://c.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png",
];

const categoryColor: Record<StopCategory, string> = {
  city: "#1565c0",
  nature: "#0e7c7b",
  heritage: "#b07d2b",
  temple: "#6a3d9a",
  border: "#c0392b",
};

type Props = {
  programs: Program[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  layers: MapLayers;
  onSelectAttraction: (stopId: string) => void;
  /** Stop the detail card is open on — the map gently flies to it. */
  focusedStopId: string | null;
  /** Ordered IATA codes of a flight to highlight on the map (or null). */
  focusedFlight: string[] | null;
  /** A single itinerary day to zoom into (start → overnight stops), or null. */
  focusedDay: {
    day: number;
    stops: string[];
    nightStopId?: string;
    /** Precomputed road-snapped polyline for the day (null when no movement). */
    line: [number, number][] | null;
  } | null;
  /** Left filter/list panel is open (reserve left padding when fitting). */
  panelOpen: boolean;
  /** Right program card is open (reserve right padding when fitting). */
  cardOpen: boolean;
  lang: Lang;
};

type HoverInfo = {
  id: string;
  coords: [number, number];
  label: string;
};

export default function MapView({
  programs,
  selectedId,
  onSelect,
  layers,
  onSelectAttraction,
  focusedStopId,
  focusedFlight,
  focusedDay,
  panelOpen,
  cardOpen,
  lang,
}: Props) {
  const { t } = useTranslation();
  const mapRef = useRef<MapRef | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [hover, setHover] = useState<HoverInfo | null>(null);

  const selected = programs.find((p) => p.id === selectedId) ?? null;

  // Padding that keeps routes/pins clear of the open overlay panels.
  const fitPadding = useCallback(
    () => ({
      top: 60,
      bottom: 60,
      left: panelOpen ? FILTER_PANEL_W + 24 : 40,
      right: cardOpen ? PROGRAM_CARD_W + 24 : 40,
    }),
    [panelOpen, cardOpen]
  );

  // Coordinates + great-circle arc for the focused flight (BKK→CAN→URC, etc.).
  const flightArc = useMemo(() => {
    if (!focusedFlight || focusedFlight.length < 2) return null;
    const pts = focusedFlight
      .map((code) => getAirportCoords(code))
      .filter((c): c is [number, number] => Array.isArray(c));
    if (pts.length < 2) return null;
    return { points: pts, arc: greatCircleArc(pts) };
  }, [focusedFlight]);

  // Geocoded stops + road-snapped connector line for a focused itinerary day.
  const dayFocus = useMemo(() => {
    if (!focusedDay?.stops.length) return null;
    const pins = focusedDay.stops
      .map((id) => {
        const s = getStop(id);
        return s ? { id, coords: s.coords as [number, number], name: s.name } : null;
      })
      .filter((p): p is NonNullable<typeof p> => p !== null);
    if (!pins.length) return null;
    // Prefer the build-time road geometry; fall back to a great-circle arc.
    const line =
      focusedDay.line && focusedDay.line.length > 1
        ? focusedDay.line
        : pins.length >= 2
          ? greatCircleArc(pins.map((p) => p.coords))
          : null;
    return { pins, line, nightStopId: focusedDay.nightStopId };
  }, [focusedDay]);

  // Render order: dimmed programs first, the selected one on top.
  const ordered = useMemo(() => {
    const others = programs.filter((p) => p.id !== selectedId);
    return selected ? [...others, selected] : programs;
  }, [programs, selected, selectedId]);

  // Only reference layers for modes a program actually uses.
  const programModes = useMemo(() => {
    const map = new Map<string, Set<string>>();
    for (const p of programs) {
      map.set(p.id, new Set(p.routeSegments.map((s) => s.mode)));
    }
    return map;
  }, [programs]);

  const interactiveLayerIds = useMemo(
    () =>
      programs.flatMap((p) =>
        [...(programModes.get(p.id) ?? [])].map((m) => `${p.id}-${m}`)
      ),
    [programs, programModes]
  );

  const fitAll = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;
    let w = Infinity,
      s = Infinity,
      e = -Infinity,
      n = -Infinity;
    let has = false;
    for (const p of programs) {
      const b = programBounds(p);
      if (!b) continue;
      has = true;
      w = Math.min(w, b[0][0]);
      s = Math.min(s, b[0][1]);
      e = Math.max(e, b[1][0]);
      n = Math.max(n, b[1][1]);
    }
    if (!has) return;
    map.fitBounds(
      [
        [w, s],
        [e, n],
      ],
      { padding: fitPadding(), duration: 700, maxZoom: 6 }
    );
  }, [programs, fitPadding]);

  // A focused flight fits to its arc; clearing it (or selecting a program)
  // returns to the program's "big picture"; nothing selected fits to all.
  // Toggle the basemap's built-in 3D building extrusions.
  useEffect(() => {
    const map = mapRef.current?.getMap();
    if (!map || !loaded) return;
    if (map.getLayer("building-3d")) {
      map.setLayoutProperty(
        "building-3d",
        "visibility",
        layers.buildings3d ? "visible" : "none"
      );
    }
  }, [layers.buildings3d, loaded]);

  // Camera framing, in priority order: a clicked attraction flies to its pin;
  // otherwise a focused flight / day / program fits its bounds; nothing selected
  // fits the whole map. Because clearing the attraction (closing its card) re-runs
  // this, dismissing a pin returns the camera to the itinerary — not the globe.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !loaded) return;
    if (focusedStopId) {
      const stop = getStop(focusedStopId);
      if (stop) {
        map.flyTo({
          center: stop.coords,
          zoom: Math.max(map.getZoom(), 8.5),
          duration: 700,
          padding: fitPadding(),
        });
        return;
      }
    }
    if (flightArc) {
      let w = Infinity,
        s = Infinity,
        e = -Infinity,
        n = -Infinity;
      for (const [lng, lat] of flightArc.points) {
        w = Math.min(w, lng);
        e = Math.max(e, lng);
        s = Math.min(s, lat);
        n = Math.max(n, lat);
      }
      map.fitBounds(
        [
          [w, s],
          [e, n],
        ],
        { padding: fitPadding(), duration: 800, maxZoom: 6 }
      );
      return;
    }
    if (dayFocus) {
      let w = Infinity,
        s = Infinity,
        e = -Infinity,
        n = -Infinity;
      const coordsList = dayFocus.line ?? dayFocus.pins.map((p) => p.coords);
      for (const [lng, lat] of coordsList) {
        w = Math.min(w, lng);
        e = Math.max(e, lng);
        s = Math.min(s, lat);
        n = Math.max(n, lat);
      }
      map.fitBounds(
        [
          [w, s],
          [e, n],
        ],
        { padding: fitPadding(), duration: 800, maxZoom: dayFocus.pins.length > 1 ? 9 : 10 }
      );
      return;
    }
    if (selected) {
      const b = programBounds(selected);
      if (b) map.fitBounds(b, { padding: fitPadding(), duration: 800, maxZoom: 8 });
    } else {
      fitAll();
    }
  }, [focusedStopId, selected, loaded, flightArc, dayFocus, fitAll, fitPadding]);

  const handleClick = useCallback(
    (e: MapLayerMouseEvent) => {
      const feat = e.features?.[0];
      if (!feat?.layer?.id) return;
      const id = feat.layer.id.replace(/-(drive|flight|train)$/, "");
      onSelect(id);
    },
    [onSelect]
  );

  // Stops shown by the standalone Attractions layer (skip ones already
  // numbered for the selected program to reduce overlap).
  const selectedStopIds = useMemo(
    () => new Set(selected ? orderedStopIds(selected) : []),
    [selected]
  );

  return (
    <MapGL
      ref={mapRef}
      initialViewState={INITIAL_VIEW}
      mapStyle={MAP_STYLE}
      maxPitch={85}
      terrain={
        layers.terrain3d ? { source: "terrain-dem", exaggeration: 1.4 } : undefined
      }
      onLoad={(e) => {
        setLoaded(true);
        // Soft sky/atmosphere, only visible once the map is tilted.
        e.target.setSky({
          "sky-color": "#a7c7e7",
          "sky-horizon-blend": 0.6,
          "horizon-color": "#eaf2fb",
          "horizon-fog-blend": 0.6,
          "fog-color": "#e8eef5",
          "fog-ground-blend": 0.4,
        });
      }}
      interactiveLayerIds={interactiveLayerIds}
      onClick={handleClick}
      onMouseEnter={() => {
        const c = mapRef.current?.getCanvas();
        if (c) c.style.cursor = "pointer";
      }}
      onMouseLeave={() => {
        const c = mapRef.current?.getCanvas();
        if (c) c.style.cursor = "";
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <NavigationControl position="top-right" showCompass visualizePitch />
      <ScaleControl position="bottom-right" />

      {/* Elevation: shaded relief (flat view) + 3D terrain when tilted */}
      {layers.terrain3d && (
        <Source
          id="terrain-dem"
          type="raster-dem"
          tiles={TERRAIN_TILES}
          encoding="terrarium"
          tileSize={256}
          maxzoom={TERRAIN_MAXZOOM}
          attribution="Elevation: Terrarium (AWS Open Data / SRTM, ASTER)"
        >
          <Layer
            id="hillshade"
            type="hillshade"
            paint={{
              "hillshade-exaggeration": 0.45,
              "hillshade-shadow-color": "#5a5a5a",
            }}
          />
        </Source>
      )}

      {/* Railway overlay (loads tiles only while toggled on) */}
      {layers.railways && (
        <Source
          id="orm"
          type="raster"
          tiles={ORM_TILES}
          tileSize={256}
          attribution="Railways © OpenRailwayMap (CC-BY-SA 2.0)"
        >
          <Layer id="orm-layer" type="raster" paint={{ "raster-opacity": 0.85 }} />
        </Source>
      )}

      {ordered.map((program) => {
        const fc = getGeometry(program.id);
        if (!fc) return null;
        const color = getRegion(program.regionId)?.color ?? "#1565c0";
        const isSel = program.id === selectedId;
        const dim = selectedId !== null && !isSel;
        // Fade the selected program's full route while a single day is in focus.
        const opacity = dim ? 0.16 : isSel && dayFocus ? 0.22 : selectedId ? 0.95 : 0.7;
        const width = isSel ? 4.5 : 2.5;
        const modes = programModes.get(program.id) ?? new Set<string>();

        return (
          <Source key={program.id} id={`route-${program.id}`} type="geojson" data={fc}>
            {modes.has("drive") && (
              <Layer
                id={`${program.id}-drive`}
                type="line"
                filter={["==", ["get", "mode"], "drive"]}
                layout={{ "line-cap": "round", "line-join": "round" }}
                paint={{ "line-color": color, "line-width": width, "line-opacity": opacity }}
              />
            )}
            {modes.has("flight") && (
              <Layer
                id={`${program.id}-flight`}
                type="line"
                filter={["==", ["get", "mode"], "flight"]}
                layout={{ "line-cap": "round", "line-join": "round" }}
                paint={{
                  "line-color": color,
                  "line-width": isSel ? 3 : 2,
                  "line-opacity": opacity,
                  "line-dasharray": modeDash.flight!,
                }}
              />
            )}
            {modes.has("train") && (
              <Layer
                id={`${program.id}-train`}
                type="line"
                filter={["==", ["get", "mode"], "train"]}
                layout={{ "line-cap": "round", "line-join": "round" }}
                paint={{
                  "line-color": color,
                  "line-width": isSel ? 3.5 : 2.2,
                  "line-opacity": opacity,
                  "line-dasharray": modeDash.train!,
                }}
              />
            )}
          </Source>
        );
      })}

      {/* Focused flight: great-circle arc + airport pins */}
      {flightArc && (
        <>
          <Source
            id="flight-arc"
            type="geojson"
            data={{
              type: "Feature",
              properties: {},
              geometry: { type: "LineString", coordinates: flightArc.arc },
            }}
          >
            <Layer
              id="flight-arc-line"
              type="line"
              layout={{ "line-cap": "round", "line-join": "round" }}
              paint={{
                "line-color": "#1d4ed8",
                "line-width": 3,
                "line-opacity": 0.9,
                "line-dasharray": [2, 1.6],
              }}
            />
          </Source>
          {focusedFlight?.map((code, i) => {
            const c = getAirportCoords(code);
            if (!c) return null;
            return (
              <Marker key={`fa-${code}-${i}`} longitude={c[0]} latitude={c[1]} anchor="center">
                <div className="flex items-center gap-0.5 rounded-md border-2 border-[#1d4ed8] bg-white px-1 py-0.5 text-[9px] font-bold text-[#1d4ed8] shadow">
                  <Plane size={9} />
                  {code}
                </div>
              </Marker>
            );
          })}
        </>
      )}

      {/* Focused itinerary day: connector line + start/overnight pins */}
      {dayFocus?.line && (
        <Source
          id="day-line"
          type="geojson"
          data={{
            type: "Feature",
            properties: {},
            geometry: { type: "LineString", coordinates: dayFocus.line },
          }}
        >
          <Layer
            id="day-line-layer"
            type="line"
            layout={{ "line-cap": "round", "line-join": "round" }}
            paint={{
              "line-color": getRegion(selected?.regionId ?? "")?.color ?? "#1565c0",
              "line-width": 4,
              "line-opacity": 0.95,
            }}
          />
        </Source>
      )}
      {dayFocus &&
        dayFocus.pins.map((pin, idx) => {
          const color = getRegion(selected?.regionId ?? "")?.color ?? "#1565c0";
          const isNight = pin.id === dayFocus.nightStopId;
          const isStart = idx === 0 && dayFocus.pins.length > 1;
          const role = isStart ? t("dayStart") : isNight ? t("dayNight") : null;
          return (
            <Marker
              key={`day-${pin.id}-${idx}`}
              longitude={pin.coords[0]}
              latitude={pin.coords[1]}
              anchor="bottom"
            >
              <button
                type="button"
                aria-label={L(pin.name, lang)}
                onClick={(ev) => {
                  ev.stopPropagation();
                  onSelectAttraction(pin.id);
                }}
                className="flex flex-col items-center"
              >
                <span
                  className="flex items-center gap-1 rounded-md border-2 bg-white px-1.5 py-0.5 text-[10px] font-bold shadow-card"
                  style={{ borderColor: color, color }}
                >
                  {role && (
                    <span
                      className="rounded-sm px-1 py-px text-[8px] uppercase tracking-wide text-white"
                      style={{ backgroundColor: color }}
                    >
                      {role}
                    </span>
                  )}
                  {L(pin.name, lang)}
                </span>
                <span
                  className="mt-0.5 h-2.5 w-2.5 rounded-full border-2 border-white shadow"
                  style={{ backgroundColor: color }}
                />
              </button>
            </Marker>
          );
        })}

      {/* Attractions layer: every categorized stop across the map */}
      {layers.attractions &&
        allStops.map((stop) => {
          if (selectedStopIds.has(stop.id)) return null;
          const color = stop.category ? categoryColor[stop.category] : "#6b7280";
          return (
            <Marker
              key={`poi-${stop.id}`}
              longitude={stop.coords[0]}
              latitude={stop.coords[1]}
              anchor="center"
            >
              <button
                type="button"
                aria-label={L(stop.name, lang)}
                onClick={(ev) => {
                  ev.stopPropagation();
                  onSelectAttraction(stop.id);
                }}
                onMouseEnter={() =>
                  setHover({ id: stop.id, coords: stop.coords, label: L(stop.name, lang) })
                }
                onMouseLeave={() => setHover(null)}
                className="grid h-6 w-6 place-items-center rounded-full"
                aria-hidden={false}
              >
                <span
                  className="h-2.5 w-2.5 rounded-full border border-white shadow"
                  style={{ backgroundColor: color }}
                />
              </button>
            </Marker>
          );
        })}

      {/* Airport pins */}
      {layers.airports &&
        airports.map((ap) => {
          const color = getRegion(ap.regionId)?.color ?? "#1f2937";
          return (
            <Marker
              key={`ap-${ap.id}`}
              longitude={ap.coords[0]}
              latitude={ap.coords[1]}
              anchor="center"
            >
              <div
                title={`${ap.iata} · ${L(ap.name, lang)}`}
                onMouseEnter={() =>
                  setHover({
                    id: `ap-${ap.id}`,
                    coords: ap.coords,
                    label: `✈ ${ap.iata} · ${L(ap.name, lang)}`,
                  })
                }
                onMouseLeave={() => setHover(null)}
                className="flex items-center gap-0.5 rounded-md border-2 bg-white px-1 py-0.5 text-[9px] font-bold shadow"
                style={{ borderColor: color, color }}
              >
                <Plane size={9} />
                {ap.iata}
              </div>
            </Marker>
          );
        })}

      {/* Anchor dots for every visible program (start city) */}
      {!selected &&
        programs.map((program) => {
          const startId = program.routeSegments[0]?.from;
          const stop = startId ? getStop(startId) : undefined;
          if (!stop) return null;
          const color = getRegion(program.regionId)?.color ?? "#1565c0";
          return (
            <Marker
              key={`anchor-${program.id}`}
              longitude={stop.coords[0]}
              latitude={stop.coords[1]}
              anchor="center"
            >
              <button
                type="button"
                aria-label={L(program.title, lang)}
                onClick={(ev) => {
                  ev.stopPropagation();
                  onSelect(program.id);
                }}
                onMouseEnter={() =>
                  setHover({ id: stop.id, coords: stop.coords, label: L(stop.name, lang) })
                }
                onMouseLeave={() => setHover(null)}
                className="route-pin"
                style={{ backgroundColor: color }}
              >
                ●
              </button>
            </Marker>
          );
        })}

      {/* Numbered itinerary markers for the selected program */}
      {selected &&
        !dayFocus &&
        orderedStopIds(selected).map((stopId, idx) => {
          const stop = getStop(stopId);
          if (!stop) return null;
          const color = getRegion(selected.regionId)?.color ?? "#1565c0";
          return (
            <Marker
              key={`stop-${selected.id}-${stopId}-${idx}`}
              longitude={stop.coords[0]}
              latitude={stop.coords[1]}
              anchor="center"
            >
              <button
                type="button"
                aria-label={L(stop.name, lang)}
                className="route-pin is-active"
                style={{ backgroundColor: color }}
                onClick={(ev) => {
                  ev.stopPropagation();
                  onSelectAttraction(stop.id);
                }}
                onMouseEnter={() =>
                  setHover({ id: stop.id, coords: stop.coords, label: L(stop.name, lang) })
                }
                onMouseLeave={() => setHover(null)}
              >
                {idx + 1}
              </button>
            </Marker>
          );
        })}

      {hover && (
        <Popup
          longitude={hover.coords[0]}
          latitude={hover.coords[1]}
          offset={16}
          closeButton={false}
          closeOnClick={false}
          anchor="bottom"
        >
          <span className={lang === "th" ? "lang-th" : undefined}>{hover.label}</span>
        </Popup>
      )}
    </MapGL>
  );
}
