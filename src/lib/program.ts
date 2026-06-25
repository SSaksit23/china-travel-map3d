import type { Program, ProgramHotel, TransportMode } from "../types";
import { getStop } from "../data/stops";

/**
 * The hotel the program books in a given city (from its day-by-day itinerary).
 * Matches a day's `hotel.cityId`, otherwise the day's first anchor stop.
 */
export function programHotelForStop(
  program: Program | null | undefined,
  stopId: string
): ProgramHotel | undefined {
  if (!program?.itinerary) return undefined;
  for (const day of program.itinerary) {
    if (!day.hotel) continue;
    if (day.hotel.cityId === stopId) return day.hotel;
    if (!day.hotel.cityId && day.stops?.[0] === stopId) return day.hotel;
  }
  return undefined;
}

/** Ordered, de-duplicated stop ids following the itinerary (start -> ... -> end). */
export function orderedStopIds(program: Program): string[] {
  const ids: string[] = [];
  program.routeSegments.forEach((seg, i) => {
    if (i === 0) ids.push(seg.from);
    if (ids[ids.length - 1] !== seg.to) ids.push(seg.to);
  });
  return ids;
}

export type LngLat = [number, number];

/** Bounding box [west, south, east, north] over a program's stops. */
export function programBounds(program: Program): [LngLat, LngLat] | null {
  const coords = orderedStopIds(program)
    .map((id) => getStop(id)?.coords)
    .filter((c): c is LngLat => Array.isArray(c));
  if (!coords.length) return null;
  let w = Infinity,
    s = Infinity,
    e = -Infinity,
    n = -Infinity;
  for (const [lng, lat] of coords) {
    w = Math.min(w, lng);
    e = Math.max(e, lng);
    s = Math.min(s, lat);
    n = Math.max(n, lat);
  }
  return [
    [w, s],
    [e, n],
  ];
}

/** Dash pattern per transport mode (undefined = solid). */
export const modeDash: Record<TransportMode, number[] | undefined> = {
  drive: undefined,
  flight: [2, 1.6],
  train: [0.4, 1.8],
};

/** One point along the great circle between a and b at fraction f (0..1). */
function gcPoint(a: LngLat, b: LngLat, f: number): LngLat {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const toDeg = (r: number) => (r * 180) / Math.PI;
  const lat1 = toRad(a[1]),
    lon1 = toRad(a[0]),
    lat2 = toRad(b[1]),
    lon2 = toRad(b[0]);
  const d =
    2 *
    Math.asin(
      Math.sqrt(
        Math.sin((lat2 - lat1) / 2) ** 2 +
          Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) / 2) ** 2
      )
    );
  if (d === 0) return a;
  const A = Math.sin((1 - f) * d) / Math.sin(d);
  const B = Math.sin(f * d) / Math.sin(d);
  const x = A * Math.cos(lat1) * Math.cos(lon1) + B * Math.cos(lat2) * Math.cos(lon2);
  const y = A * Math.cos(lat1) * Math.sin(lon1) + B * Math.cos(lat2) * Math.sin(lon2);
  const z = A * Math.sin(lat1) + B * Math.sin(lat2);
  return [toDeg(Math.atan2(y, x)), toDeg(Math.atan2(z, Math.sqrt(x * x + y * y)))];
}

/** Build a smooth great-circle poly-line through an ordered list of points. */
export function greatCircleArc(points: LngLat[], stepsPerLeg = 48): LngLat[] {
  const out: LngLat[] = [];
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i];
    const b = points[i + 1];
    for (let s = 0; s <= stepsPerLeg; s++) {
      if (i > 0 && s === 0) continue; // avoid duplicate join point
      out.push(gcPoint(a, b, s / stepsPerLeg));
    }
  }
  return out;
}
