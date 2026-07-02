# Per-location media

The source of truth is **`src/data/media/media.json`** — one entry per location
(stop id), scaffolded by `npm run scaffold:media`. Check coverage with
`npm run audit:media`.

## How to add media for a location

**Images (committed to the repo):**
Drop files into `public/attractions/` named by the stop id:

- `<id>.jpg` — hero (e.g. `urumqi.jpg`)
- `<id>-1.jpg` … `<id>-4.jpg` — gallery (up to 4)

Then run `npm run scaffold:media` — it auto-fills each location's `images`
from these files. (`jpg`, `jpeg`, `png`, `webp` all work.)

**Video (external — NOT committed):**
Vertical clips are large, so they live on an external host (CDN / bucket /
YouTube), not in git. Hand-edit the location's entry in `media.json`:

```json
"urumqi": {
  "images": ["/attractions/urumqi.jpg", "/attractions/urumqi-1.jpg"],
  "video": { "type": "mp4", "url": "https://cdn.example.com/urumqi.mp4", "orientation": "vertical" }
}
```

Use `"type": "youtube"` with a watch URL for YouTube. `scaffold:media` never
touches the `video` field — it only refreshes `images` from disk.

Empty entries (`"images": [], "video": null`) are placeholders; the detail card
shows a "no image yet" state until they're filled.

This folder (`public/media/`) is only used for the RedNote pipeline's downloaded
clips; regular videos are external URLs.
