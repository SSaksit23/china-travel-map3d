/**
 * Build-time route geometry generator.
 *
 * For every program segment:
 *   - drive  -> query OSRM for road-snapped geometry (falls back to a straight line)
 *   - flight -> great-circle arc (rendered dashed)
 *   - train  -> gentle arc (rendered dotted)
 *
 * Output: one GeoJSON FeatureCollection per program at
 * src/data/geometry/<programId>.json. The app reads these at runtime so it
 * never needs to call a routing server.
 *
 * Run with: npm run build:routes
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { greatCircle, bezierSpline, lineString, distance } from "@turf/turf";
import type { Feature, LineString } from "geojson";
import { programs } from "../src/data/programs.ts";
import { getStop } from "../src/data/stops.ts";
import type { TransportMode } from "../src/types.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "../src/data/geometry");
const DATA_DIR = resolve(__dirname, "../src/data");
const OSRM = "https://router.project-osrm.org/route/v1/driving";

// Rough cruising speeds for estimating non-drive leg duration.
const FLIGHT_KMH = 750;
const FLIGHT_BUFFER_MIN = 75; // taxi/connection padding
const TRAIN_KMH = 90;

type Coord = [number, number];

type LegMeta = {
  from: string;
  to: string;
  mode: TransportMode;
  km: number;
  minutes: number;
};

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
  // Smooth the great circle into a gentle curve for nicer rendering.
  const smoothed = bezierSpline(gc as Feature<LineString>, { sharpness });
  return smoothed.geometry.coordinates as Coord[];
}

function makeFeature(
  coords: Coord[],
  props: { mode: TransportMode; from: string; to: string }
): Feature<LineString> {
  return { type: "Feature", geometry: lineString(coords).geometry, properties: props };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  let warnings = 0;
  const legMeta: Record<string, LegMeta[]> = {};

  for (const program of programs) {
    const features: Feature<LineString>[] = [];
    const legs: LegMeta[] = [];

    for (const seg of program.routeSegments) {
      const a = getStop(seg.from);
      const b = getStop(seg.to);
      if (!a || !b) {
        console.warn(`! ${program.id}: missing stop ${seg.from} or ${seg.to}`);
        warnings++;
        continue;
      }
      const from = a.coords as Coord;
      const to = b.coords as Coord;
      const gcKm = distance(from, to, { units: "kilometers" });
      let coords: Coord[];
      let km: number;
      let minutes: number;

      if (seg.mode === "drive") {
        const routed = await osrmRoute(from, to);
        if (routed && routed.coords.length > 1) {
          coords = routed.coords;
          km = routed.distance / 1000;
          minutes = routed.duration / 60;
        } else {
          console.warn(`! ${program.id}: OSRM failed ${seg.from}->${seg.to}, straight line`);
          warnings++;
          coords = [from, to];
          km = gcKm;
          minutes = (gcKm / 60) * 60; // assume ~60 km/h fallback
        }
        await sleep(350); // be gentle with the public OSRM server
      } else if (seg.mode === "flight") {
        coords = arc(from, to, 0.85);
        km = gcKm;
        minutes = (gcKm / FLIGHT_KMH) * 60 + FLIGHT_BUFFER_MIN;
      } else {
        coords = arc(from, to, 0.6);
        km = gcKm;
        minutes = (gcKm / TRAIN_KMH) * 60;
      }

      // Honour explicit per-segment overrides from the program data
      // (e.g. real high-speed-rail timings that the flat estimate can't capture).
      if (typeof seg.km === "number") km = seg.km;
      if (typeof seg.hours === "number") minutes = seg.hours * 60;

      features.push(makeFeature(coords, { mode: seg.mode, from: seg.from, to: seg.to }));
      legs.push({
        from: seg.from,
        to: seg.to,
        mode: seg.mode,
        km: Math.round(km),
        minutes: Math.round(minutes),
      });
    }

    const fc = { type: "FeatureCollection" as const, features };
    const file = resolve(OUT_DIR, `${program.id}.json`);
    await writeFile(file, JSON.stringify(fc));
    legMeta[program.id] = legs;
    console.log(`✓ ${program.id}: ${features.length} segments -> ${program.id}.json`);
  }

  await writeFile(resolve(DATA_DIR, "legmeta.json"), JSON.stringify(legMeta, null, 0));
  console.log(`✓ legmeta.json (${Object.keys(legMeta).length} programs)`);
  console.log(warnings ? `Done with ${warnings} warning(s).` : "Done, no warnings.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
