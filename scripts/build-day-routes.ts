/**
 * Build-time per-day route geometry generator.
 *
 * For every itinerary day of every program, this computes a single polyline
 * that the app draws when the user taps that day. The path:
 *   - starts where the group spent the *previous* night (so days that only
 *     list a destination still show a sensible starting point),
 *   - passes through the day's listed stops,
 *   - ends at the day's overnight city.
 *
 * Drive legs are snapped to real roads via OSRM; flight/train/ferry legs (and
 * any very long hop) use a smooth great-circle arc instead of a nonsensical
 * driving route. Output: src/data/dayroutes.json, read at runtime so the app
 * never calls a routing server.
 *
 * Run with: npm run build:dayroutes
 */
import { writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { greatCircle, bezierSpline, lineString, distance } from "@turf/turf";
import type { Feature, LineString } from "geojson";
import { programs } from "../src/data/programs.ts";
import { getStop } from "../src/data/stops.ts";
import type { TransportMode } from "../src/types.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = resolve(__dirname, "../src/data");
const OSRM = "https://router.project-osrm.org/route/v1/driving";

/** Beyond this straight-line distance we never trust a "drive" leg. */
const MAX_DRIVE_KM = 900;
const FLIGHT_KMH = 750;
const FLIGHT_BUFFER_MIN = 75; // taxi/connection padding
const TRAIN_KMH = 90;

type Coord = [number, number];

type DayRoute = {
  day: number;
  /** Resolved city ids from the day's start through its overnight stop. */
  stops: string[];
  /** Overnight city id for the day. */
  night: string;
  /** Road-snapped / arced polyline for the whole day (null when no movement). */
  line: Coord[] | null;
  /** Total travel distance for the day in km (0 when in-city). */
  km: number;
  /** Total travel time for the day in minutes (0 when in-city). */
  minutes: number;
  /** Dominant transport mode (longest leg), used for the icon. */
  mode: TransportMode;
};

/** A route-spine segment's mode plus any explicit km/hours overrides. */
type SegInfo = { mode: TransportMode; km?: number; hours?: number };

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

type OsrmResult = { coords: Coord[]; distance: number; duration: number };

async function osrmRoute(from: Coord, to: Coord): Promise<OsrmResult | null> {
  const url = `${OSRM}/${from[0]},${from[1]};${to[0]},${to[1]}?overview=simplified&geometries=geojson`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": "chinese-travel-map/1.0" } });
    if (!res.ok) return null;
    const json = (await res.json()) as {
      code: string;
      routes?: { geometry: { coordinates: Coord[] }; distance: number; duration: number }[];
    };
    if (json.code !== "Ok" || !json.routes?.length) return null;
    const r = json.routes[0];
    return { coords: r.geometry.coordinates, distance: r.distance, duration: r.duration };
  } catch {
    return null;
  }
}

function arc(from: Coord, to: Coord, sharpness: number): Coord[] {
  const gc = greatCircle(from, to, { npoints: 32 });
  const smoothed = bezierSpline(gc as Feature<LineString>, { sharpness });
  return smoothed.geometry.coordinates as Coord[];
}

function lastOf<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

async function main() {
  const out: Record<string, DayRoute[]> = {};
  let warnings = 0;

  for (const program of programs) {
    if (!program.itinerary?.length) continue;

    // Segment lookup keyed on "from|to" (both directions) from the route spine,
    // carrying the mode plus any explicit km/hours overrides.
    const segOf = new Map<string, SegInfo>();
    for (const seg of program.routeSegments) {
      const info: SegInfo = { mode: seg.mode, km: seg.km, hours: seg.hours };
      segOf.set(`${seg.from}|${seg.to}`, info);
      segOf.set(`${seg.to}|${seg.from}`, info);
    }

    const days: DayRoute[] = [];
    let prevEnd: string | undefined;

    for (const day of program.itinerary) {
      const dayStops = day.stops ?? [];
      const end = day.hotel?.cityId ?? lastOf(dayStops) ?? prevEnd;

      // Ordered waypoints: previous overnight -> the day's stops -> overnight.
      const wp: string[] = [];
      const push = (id?: string) => {
        if (id && lastOf(wp) !== id) wp.push(id);
      };
      push(prevEnd);
      for (const s of dayStops) push(s);
      push(end);

      const resolved = wp.filter((id) => getStop(id));

      let line: Coord[] | null = null;
      let dayKm = 0;
      let dayMin = 0;
      let dominantMode: TransportMode = "drive";
      let dominantKm = -1;
      if (resolved.length >= 2) {
        line = [];
        for (let i = 0; i < resolved.length - 1; i++) {
          const a = getStop(resolved[i])!.coords as Coord;
          const b = getStop(resolved[i + 1])!.coords as Coord;
          const gcKm = distance(a, b, { units: "kilometers" });
          const seginfo = segOf.get(`${resolved[i]}|${resolved[i + 1]}`);
          const mode: TransportMode =
            seginfo?.mode ?? (gcKm > MAX_DRIVE_KM ? "flight" : "drive");

          let seg: Coord[];
          let legKm: number;
          let legMin: number;
          if (mode === "drive" && gcKm <= MAX_DRIVE_KM) {
            const routed = await osrmRoute(a, b);
            if (routed && routed.coords.length > 1) {
              seg = routed.coords;
              legKm = routed.distance / 1000;
              legMin = routed.duration / 60;
            } else {
              console.warn(`! ${program.id} d${day.day}: OSRM failed ${resolved[i]}->${resolved[i + 1]}`);
              warnings++;
              seg = [a, b];
              legKm = gcKm;
              legMin = (gcKm / 60) * 60; // ~60 km/h fallback
            }
            await sleep(300); // be gentle with the public OSRM server
          } else if (mode === "flight") {
            seg = arc(a, b, 0.85);
            legKm = seginfo?.km ?? gcKm;
            legMin = (legKm / FLIGHT_KMH) * 60 + FLIGHT_BUFFER_MIN;
          } else {
            // train / ferry — honor explicit km/hours overrides when present.
            seg = arc(a, b, 0.6);
            legKm = seginfo?.km ?? gcKm;
            legMin =
              seginfo?.hours != null ? seginfo.hours * 60 : (legKm / TRAIN_KMH) * 60;
          }

          dayKm += legKm;
          dayMin += legMin;
          if (legKm > dominantKm) {
            dominantKm = legKm;
            dominantMode = mode;
          }

          if (i > 0) seg = seg.slice(1); // avoid duplicate join point
          line.push(...seg);
        }
      }

      days.push({
        day: day.day,
        stops: resolved,
        night: (end && getStop(end) ? end : lastOf(resolved)) ?? "",
        line,
        km: Math.round(dayKm),
        minutes: Math.round(dayMin),
        mode: dominantMode,
      });
      prevEnd = end;
    }

    out[program.id] = days;
    console.log(`✓ ${program.id}: ${days.length} day routes`);
  }

  await writeFile(resolve(DATA_DIR, "dayroutes.json"), JSON.stringify(out));
  console.log(`✓ dayroutes.json (${Object.keys(out).length} programs)`);
  console.log(warnings ? `Done with ${warnings} warning(s).` : "Done, no warnings.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
