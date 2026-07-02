export type Lang = "th" | "en";

export type Localized = {
  th: string;
  en: string;
  zh?: string;
};

export type RegionId =
  | "north"
  | "south"
  | "gansu"
  | "tibet"
  | "dongbei"
  | "shandong"
  | "shanxi"
  | "innermongolia"
  | "central";

/** Toggleable overlay layers on the map. */
export type MapLayers = {
  railways: boolean;
  airports: boolean;
  attractions: boolean;
  buildings3d: boolean;
  terrain3d: boolean;
};

export type TransportMode = "drive" | "flight" | "train";

export type Difficulty = "easy" | "moderate" | "high";

/** Customer segments, from the segment-matching matrix. */
export type SegmentId =
  | "family"
  | "honeymoon"
  | "photography"
  | "adventure"
  | "culture"
  | "bucketlist"
  | "firsttimer"
  | "repeater";

export type Region = {
  id: RegionId;
  name: Localized;
  color: string;
};

/** Attraction category, used for marker icons and badges. */
export type StopCategory =
  | "city"
  | "nature"
  | "heritage"
  | "temple"
  | "border";

export type Stop = {
  id: string;
  name: Localized;
  /** [longitude, latitude] in WGS-84 (MapLibre order). */
  coords: [number, number];
  category?: StopCategory;
  /** Wikipedia (English) article title used to fetch a photo + description. */
  wiki?: string;
  /** Optional curated description that overrides the Wikipedia extract. */
  blurb?: Localized;
};

/**
 * One recommended hotel for a city, sourced from Trip.com (Ctrip) at build time
 * and committed to src/data/media/hotels.json (keyless at runtime).
 */
export type HotelInfo = {
  id: string;
  /** Chinese name. */
  name: string;
  /** English name when available. */
  nameEn?: string;
  /** Star rating (diamonds), 0–5. */
  star?: number;
  /** Average review score, e.g. "4.8". */
  score?: string;
  /** Short score label, e.g. "超棒". */
  scoreDesc?: string;
  /** Review-count text, e.g. "2,181条点评". */
  reviews?: string;
  /** Thumbnail photo URL. */
  image?: string;
  /** Short location/zone description. */
  area?: string;
  /** Street address. */
  address?: string;
  /** Trip.com detail page URL. */
  url?: string;
};

export type ProgramSegment = {
  from: string;
  to: string;
  mode: TransportMode;
  km?: number;
  hours?: number;
};

/** A single airport pin. */
export type Airport = {
  id: string;
  iata: string;
  name: Localized;
  /** [longitude, latitude] in WGS-84 (MapLibre order). */
  coords: [number, number];
  regionId: RegionId;
  /** True for the international gateway airports used to reach the region. */
  gateway?: boolean;
};

/** A single flown hop with schedule, e.g. BKK 08:20 -> CAN 12:10 on CZ362. */
export type FlightHop = {
  /** IATA code of the departure airport. */
  from: string;
  /** IATA code of the arrival airport. */
  to: string;
  /** Flight number, e.g. "CZ362". */
  flightNo: string;
  /** Local departure time, "HH:MM". */
  dep?: string;
  /** Local arrival time, "HH:MM". */
  arr?: string;
};

/** Static flight leg shown on a program card. */
export type FlightInfo = {
  /** Ordered IATA airport codes, e.g. ["BKK", "CAN", "URC"]. */
  airports: string[];
  airline: string;
  flightNo?: string;
  /** Human duration text, e.g. "≈ 9 ชม. (รวมต่อเครื่อง)". */
  duration?: Localized;
  direction: "outbound" | "return";
  note?: Localized;
  /** Per-hop schedule (flight no. + departure/arrival times). */
  hops?: FlightHop[];
};

/** A hotel named in the program's own itinerary (sales document). */
export type ProgramHotel = {
  /** English / Latin hotel name as written in the program, e.g. "HYATT PLACE KASHGAR". */
  name: string;
  /** Star rating, e.g. 4. */
  star?: number;
  /** Stop id of the city this hotel belongs to (for map/temperature context). */
  cityId?: string;
  /** Optional note, e.g. "or equivalent 4-star (China standard)". */
  note?: Localized;
};

/**
 * One attraction/activity line in a day's itinerary. It is a plain localized
 * line, optionally carrying a `stopId`: when set (and the stop exists), the
 * line renders as a clickable chip that flies the map to that pin and opens
 * its detail card (where photos/video live).
 */
export type ItineraryStep = Localized & { stopId?: string };

/** One day of the program's day-by-day itinerary. */
export type ItineraryDay = {
  /** Day number, starting at 1. */
  day: number;
  /** Header line for the day (cities / route). */
  title: Localized;
  /** Anchor stop ids for the day (first one drives the temperature chip). */
  stops?: string[];
  /** Attractions / activities visited along the way (clickable when linked). */
  along: ItineraryStep[];
  /** Optional drive summary, e.g. "Ghez Canyon 54 km · 1.5h". */
  drive?: Localized;
  /** Overnight hotel for the day. */
  hotel?: ProgramHotel;
};

/** Customer audiences a place suits, shown as chips on the detail card. */
export type AudienceId =
  | "family"
  | "couple"
  | "solo"
  | "adventure"
  | "retiree"
  | "culture"
  | "cuisine"
  | "photography";

/** A video shown in the place detail card (YouTube embed or a local mp4). */
export type PlaceVideo = {
  type: "youtube" | "mp4";
  /** YouTube watch/embed URL, or a static path like "/media/<id>.mp4". */
  url: string;
  title?: Localized;
  /**
   * Aspect orientation hint. "vertical" (9:16, e.g. RedNote / Xiaohongshu
   * clips) is rendered in a portrait container; defaults to horizontal.
   */
  orientation?: "vertical" | "horizontal";
};

/**
 * Optional rich, manually-authored content for a stop (city or attraction),
 * keyed by stop id in src/data/places.ts. Every field is optional; the card
 * only renders the sections that have data.
 */
export type PlaceDetail = {
  /** Richer description that overrides stop.blurb / the Wikipedia extract. */
  description?: Localized;
  /** Seasons this place is best visited (drives the "recommended season" pills). */
  recommendedSeasons?: ("spring" | "summer" | "autumn" | "winter")[];
  /** Audiences this place suits. */
  audiences?: AudienceId[];
  /** "What to expect" bullet lines. */
  whatToExpect?: Localized[];
  /** Optional video player. */
  video?: PlaceVideo;
  /** Extra image paths (public/ paths or img-pipeline URLs). */
  gallery?: string[];
};

/** Generated per-stop attraction media (committed by scripts/build-images.ts). */
export type AttractionMedia = {
  thumb?: string;
  full?: string;
  credit?: string;
  sourceUrl?: string;
  extract?: string;
};

/**
 * Per-stop gallery + vertical video pulled from a RedNote / Xiaohongshu note
 * chosen by the admin in src/data/rednote.ts and downloaded into public/ by
 * scripts/build-rednote.ts. Committed to src/data/media/rednote.json so the
 * deployed app stays static and keyless. Every field is optional.
 */
export type RednoteMedia = {
  /** Local /attractions/<id>-N.jpg paths (max 4), downloaded at build time. */
  gallery?: string[];
  /** Local vertical mp4 (+ orientation), downloaded at build time. */
  video?: PlaceVideo;
  /** Author handle / source label for attribution. */
  credit?: string;
  /** Original RedNote note URL. */
  sourceUrl?: string;
};

/**
 * Unified per-location media manifest (src/data/media/media.json). One entry
 * exists for every stop — an empty entry is a placeholder to fill over time.
 * Images are committed repo paths; video is an external URL (kept out of git).
 * Scaffolded/refreshed by scripts/build-media-manifest.ts.
 */
export type LocationMedia = {
  /** Repo image paths, e.g. "/attractions/<id>-1.jpg" (hero first, max 4). */
  images?: string[];
  /** Externally-hosted video (mp4 URL or YouTube); null = slot empty. */
  video?: PlaceVideo | null;
  /** Attribution / source label. */
  credit?: string;
  /** Where the media came from (URL). */
  sourceUrl?: string;
};

/** One month of climatology for a stop. */
export type MonthlyTemp = {
  /** Month 1-12. */
  m: number;
  /** Average daily high, °C (rounded). */
  hi: number;
  /** Average daily low, °C (rounded). */
  lo: number;
};

/** Generated per-leg distance/time (committed by scripts/build-routes.ts). */
export type LegMeta = {
  from: string;
  to: string;
  mode: TransportMode;
  km: number;
  minutes: number;
};

/** Generated per-day road-snapped route (committed by scripts/build-day-routes.ts). */
export type DayRoute = {
  day: number;
  /** Resolved city ids from the day's start (previous overnight) through its overnight stop. */
  stops: string[];
  /** Overnight city id for the day. */
  night: string;
  /** Road-snapped / arced polyline for the whole day (null when there is no movement). */
  line: [number, number][] | null;
  /** Total travel distance for the day in km (0 when in-city). */
  km: number;
  /** Total travel time for the day in minutes (0 when in-city). */
  minutes: number;
  /** Dominant transport mode (longest leg), used for the icon. */
  mode: TransportMode;
};

export type PrepItem = {
  text: Localized;
  warn?: boolean;
};

export type Program = {
  /** Program code, e.g. "GO1URC-CZ004". */
  id: string;
  regionId: RegionId;
  title: Localized;
  oneLiner: Localized;
  days: number;
  nights?: number;
  airline: string;
  via: Localized;
  difficulty: Difficulty;
  altitudeNote: Localized;
  bestMonths: Localized;
  /** Months the program runs well (1 = January … 12 = December). */
  months: number[];
  highlights: Localized[];
  whoFor: Localized;
  prep: PrepItem[];
  sellingScript: Localized;
  crossSell: Localized;
  customerSegments: SegmentId[];
  /** Ordered legs; segment order also defines the route-chip order. */
  routeSegments: ProgramSegment[];
  /** Static flight details (outbound + return), editable in programs.ts. */
  flights?: FlightInfo[];
  /** Day-by-day itinerary (attractions along the way + per-day hotel). */
  itinerary?: ItineraryDay[];
};
