# Chinese Travel Map · Western China Route Map / แผนที่เส้นทางจีนตะวันตก

Interactive bilingual (Thai / English) sales map of Western China programs, for Thai outbound travel agents. Full-screen vector basemap, road-snapped routes, and a detailed program card for every itinerary.

แผนที่ขายแบบอินเทอร์แอกทีฟสองภาษา (ไทย / อังกฤษ) ของโปรแกรมจีนตะวันตก สำหรับเอเจนซีทัวร์ — แผนที่เวกเตอร์เต็มจอ เส้นทางวิ่งตามถนนจริง และการ์ดโปรแกรมในทุกเส้นทาง

---

## Features / ฟีเจอร์

- **13 real programs across 6 regions** / 13 โปรแกรมจริง 6 ภูมิภาค: North Xinjiang (北疆), South Xinjiang (南疆), Gansu–Sichuan (甘肃-四川), Qinghai–Tibet (青海-西藏), Northeast China / Dongbei (东北), Shandong / East coast (山东).
- **Road-snapped routes** / เส้นทางตามถนนจริง — drive legs follow real roads (OSRM); flights are dashed arcs, trains dotted arcs.
- **Clickable attractions** / สถานที่ท่องเที่ยวกดดูได้ — each place opens a card with a real Wikimedia/Wikipedia photo, a bilingual description, a seasonal temperature chip and a category badge (with photo credit link).
- **Per-day distance & time** / ระยะทาง+เวลาแต่ละวัน — each city-to-city leg is a travel day; distance/time auto-filled from OSRM at build time.
- **Flight details** / รายละเอียดเที่ยวบิน — editable static flight info per program (route IATA chips, airline, duration, via) shown on the card.
- **Seasonal temperatures** / อุณหภูมิตามฤดู — per-city average high/low for each program's travel months, precomputed from Open-Meteo.
- **Recommended hotels** / โรงแรมแนะนำ — each city card lists top-rated 4–5★ hotels (name, star, score, reviews, photo, location, Trip.com link), precomputed from Trip.com (Ctrip) at build time.
- **Toggleable map layers** / เลเยอร์เปิด-ปิดได้ — Railways (OpenRailwayMap overlay), Attractions (curated POI), and Airports (main + gateway airports).
- **Filter like a pro** / ตัวกรอง: by region, travel month (season), difficulty/altitude, customer segment, plus "customer says…" quick-picks.
- **Program card** / การ์ดโปรแกรม: code + region header, days + airline, season & altitude badges, day-by-day travel timeline, flights, highlights, who-it's-for, prep & cautions (with warnings), selling script, cross-sell.
- **One-tap Thai / English** (Thai is the default) / สลับ ไทย/อังกฤษ ปุ่มเดียว.
- **No API keys** / ไม่ต้องใช้คีย์ — MapLibre GL + OpenFreeMap vector tiles, all free and keyless.

## Tech stack / เทคโนโลยี

- React 18 + TypeScript + Vite 5
- MapLibre GL + `react-map-gl` (vector map), OpenFreeMap basemap
- `@turf/turf` (flight/train arcs), OSRM public API (road geometry + distance/time, build-time only)
- Wikipedia REST + Open-Meteo archive (photos / weather, build-time only)
- Tailwind CSS (styling), `react-i18next` (Thai / English), `lucide-react` (icons)

## Getting started / เริ่มต้นใช้งาน

```bash
npm install
npm run dev      # dev server at http://localhost:5173
```

Build for production / สร้างไฟล์ใช้งานจริง:

```bash
npm run build    # type-checks then builds into /dist
npm run preview  # preview the production build locally
```

## Regenerating data / สร้างข้อมูลใหม่

All dynamic data is **precomputed at build time** and committed, so the live app never
calls a routing/photo/weather server. Regenerate after editing stops or program segments:

```bash
npm run build:data      # = build:routes + build:images + build:weather + build:hotels
# or individually:
npm run build:routes    # OSRM road geometry + per-leg distance/time
npm run build:images    # Wikipedia/Wikimedia photos + descriptions
npm run build:weather   # Open-Meteo per-month average high/low
npm run build:hotels    # Trip.com (Ctrip) top-rated hotels per city
```

- `build:routes` reads `programs.ts` + `stops.ts`, calls OSRM for each `drive` leg
  (road-snapped, `overview=simplified`), draws turf arcs for `flight` / `train`, and
  writes one GeoJSON per program plus `src/data/legmeta.json` (km + minutes per leg).
  Unrouteable legs fall back to a straight line and log a warning.
- `build:images` calls the keyless Wikipedia REST summary for each stop's `wiki` title
  and writes `src/data/media/images.json` (thumb, full, extract, credit). Stops without
  a good match fall back to a curated `blurb` + a coloured placeholder.
  - **Local override:** drop a photo at `public/attractions/<stopId>.(jpg|jpeg|png|webp)`
    (e.g. from a local photo library) and it takes priority over Wikipedia — used to
    fill gaps where Wikipedia has no image, and to override any image. Current local
    photos: `hemu`, `nalati`, `kalajun`, `karakul`.
- `build:weather` calls the keyless Open-Meteo historical archive (5 recent years) and
  writes `src/data/media/weather.json` (per-month avg high/low per stop).
- `build:hotels` calls the Trip.com (Ctrip) hotel search for each overnight city
  (city ids mapped in `scripts/build-hotels.ts`), keeps the best-rated, well-reviewed
  4–5★ hotels and writes `src/data/media/hotels.json`. Needs `CTRIP_PARSER_API`
  (read from the environment or the local `.env`); the key is **only** used at build
  time and never shipped to the browser.

ข้อมูลทั้งหมด (เส้นทาง/ระยะทาง/ภาพ/อุณหภูมิ) คำนวณล่วงหน้าตอน build และ commit ไว้
แอปจริงจึงไม่ต้องเรียก API ใด ๆ — แก้ข้อมูลแล้วรัน `npm run build:data` ใหม่

## Editing content / แก้ไขเนื้อหา

- `src/data/regions.ts` — 4 regions + colours.
- `src/data/stops.ts` — every place, geocoded as `[lng, lat]` (WGS-84), with `category`,
  a Wikipedia `wiki` title (for the photo lookup) and an optional curated `blurb`.
- `src/data/airports.ts` — main + gateway airports (IATA, `[lng, lat]`, region).
- `src/data/programs.ts` — the 7 programs: bilingual title/one-liner/selling-script,
  days, airline, difficulty, altitude, best months, travel `months`, highlights, who-for,
  prep, cross-sell, `flights[]`, and ordered `routeSegments` tagged `drive` / `flight` / `train`.
- `src/data/segments.ts` — customer-segment labels + "customer says…" quick-picks.
- `src/i18n.ts` — UI strings (TH / EN).

## Deploy / การ deploy

Static single-page app — deploys as-is to Vercel or Netlify (`vercel.json` and
`netlify.toml` included). No environment variables or API keys are required.

แอปนี้เป็น static SPA deploy ขึ้น Vercel หรือ Netlify ได้ทันที ไม่ต้องตั้งค่าคีย์ใด ๆ

## Project structure / โครงสร้างโปรเจกต์

```
scripts/
  build-routes.ts          # OSRM + turf geometry + per-leg distance/time -> legmeta.json
  build-images.ts          # Wikipedia REST photos + descriptions -> media/images.json
  build-weather.ts         # Open-Meteo archive -> media/weather.json
  build-hotels.ts          # Trip.com (Ctrip) top hotels -> media/hotels.json
src/
  components/
    TopBar.tsx             # app header, filter toggle, TH/EN
    FilterPanel.tsx        # region / season filters + quick-picks
    ProgramList.tsx        # programs grouped by region
    ProgramCard.tsx        # program card: timeline (km/time/temp) + flights
    AttractionCard.tsx     # photo, bilingual description, temp, category, credit
    LayersControl.tsx      # railways / airports / attractions toggles
    MapView.tsx            # MapLibre map: routes, markers, ORM overlay, airports, POIs
  data/
    regions.ts  stops.ts  airports.ts  programs.ts  segments.ts
    geometry/<programId>.json   # generated, committed road/arc geometry
    geometry.ts            # runtime geometry loader (import.meta.glob)
    legmeta.json           # generated per-leg km + minutes
    media/images.json  media/weather.json   # generated photos + temperatures
    media.ts               # runtime loader for images / weather / legmeta
  lib/
    localize.ts  program.ts  filter.ts
  i18n.ts  types.ts  App.tsx
```

## Attributions / เครดิตข้อมูล

- Basemap: **MapLibre GL** + **OpenFreeMap** (© OpenMapTiles, data © OpenStreetMap contributors).
- Routing & distance/time: **OSRM** (build-time only).
- Railway overlay: **OpenRailwayMap** (CC-BY-SA 2.0), loaded only when the Railways layer is on.
- Attraction photos & descriptions: **Wikipedia / Wikimedia Commons** (build-time; per-photo credit links in the card).
- Temperatures: **Open-Meteo** historical archive (build-time).
- Recommended hotels: **Trip.com (Ctrip)** via the parse.bot scraper (build-time; key in `.env`, never shipped).
- The two geogv reference sites (cnrail / stele) are reproduced **in spirit** — a railway overlay and a curated heritage/attraction POI layer — rather than embedded.

## Notes / หมายเหตุ

- Coordinates are WGS-84 (standard GPS), `[lng, lat]` order for MapLibre.
- All external servers (OSRM, Wikipedia, Open-Meteo, Trip.com/Ctrip) are used **only at build time**; the deployed app is fully static except the OpenRailwayMap overlay, which only loads when toggled on.
- Flight numbers are placeholders — edit `flights[]` in `programs.ts`; the structure is ready if you later add a paid flight API.
- Hemu, Nalati, Kalajun and Karakul use local photo-library images (`public/attractions/`, credited "Chinese Travel Map"). Stops still without a photo (Koktokay, Zhagana, Lulang, Benxi, Hengdaohezi) fall back to a curated blurb + coloured placeholder; drop a file in `public/attractions/<stopId>.jpg` to fill them.
- Stop/altitude figures and selling copy come from the program cards; adjust in the data files as the catalogue changes.
