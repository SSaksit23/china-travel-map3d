/**
 * Admin's per-stop RedNote / Xiaohongshu (小红书) selection.
 *
 * This is the ONLY file an admin edits to attach RedNote media to a place:
 * map a stop id (see src/data/stops.ts) to the RedNote note you want to show.
 * Then run `npm run build:rednote` — scripts/build-rednote.ts calls the RNote
 * API, downloads the cover + up to 4 images and the (vertical) video into
 * public/, and writes src/data/media/rednote.json. Nothing here ships to the
 * browser; the deployed app stays static and keyless.
 *
 * To add a place:
 *   1. Open the note on xiaohongshu.com and copy its URL, e.g.
 *      https://www.xiaohongshu.com/explore/65a1b2c3d4e5f6a7b8c9d0e1
 *      (a share link like https://xhslink.com/xxxx does NOT work — open it in a
 *       browser first and copy the resulting /explore/<id> URL).
 *   2. Set `type` to match the note: "image" for a photo note, "video" for a clip.
 *   3. (optional) `xsecToken` — if your URL has `?xsec_token=...`, paste it here;
 *      some notes require it. Leave undefined otherwise.
 *
 * Only the agency's OWN RedNote posts should be used here — see the copyright
 * note in scripts/build-rednote.ts.
 */
export type RednoteKind = "image" | "video";

export type RednoteSelection = {
  /** Full RedNote note URL (the /explore/<id> form). */
  url: string;
  /** Whether this is a photo note or a video note (picks the API endpoint). */
  type: RednoteKind;
  /** Optional xsec_token from the share URL, when the note requires one. */
  xsecToken?: string;
};

/** stop id → chosen RedNote note. Add entries as you curate. */
export const rednoteSelections: Record<string, RednoteSelection> = {
  // Example (replace with a real note, then `npm run build:rednote`):
  // kanas: {
  //   url: "https://www.xiaohongshu.com/explore/65a1b2c3d4e5f6a7b8c9d0e1",
  //   type: "video",
  // },
};
