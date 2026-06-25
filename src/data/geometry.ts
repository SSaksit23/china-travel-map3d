import type { TransportMode } from "../types";

export type RouteFeatureProps = {
  mode: TransportMode;
  from: string;
  to: string;
};

export type RouteFeatureCollection = GeoJSON.FeatureCollection<
  GeoJSON.LineString,
  RouteFeatureProps
>;

// Eagerly bundle every generated geometry file, keyed by program id.
const modules = import.meta.glob("./geometry/*.json", { eager: true });

const byId: Record<string, RouteFeatureCollection> = {};
for (const [path, mod] of Object.entries(modules)) {
  const id = path.split("/").pop()!.replace(".json", "");
  byId[id] = ((mod as { default?: RouteFeatureCollection }).default ??
    mod) as RouteFeatureCollection;
}

export const getGeometry = (programId: string): RouteFeatureCollection | undefined =>
  byId[programId];
