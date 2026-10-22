import { useRef, useState, type DragEvent } from "react";
import { useTranslation } from "react-i18next";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  ImagePlus,
  Maximize2,
  Minimize2,
  Play,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import type { Lang } from "../types";
import type { LocalImage } from "../lib/localImages";
import MediaLightbox, { type Slide } from "./MediaLightbox";

/** YouTube thumbnail for a watch/short URL (for the strip + compact poster). */
const youTubeThumb = (url: string): string | null => {
  const m = url.match(/(?:youtu\.be\/|[?&]v=|\/embed\/)([\w-]{6,})/);
  return m ? `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg` : null;
};

/** Convert a YouTube watch/short URL into an embeddable URL. */
const youTubeEmbed = (url: string) => {
  const m = url.match(/(?:youtu\.be\/|[?&]v=|\/embed\/)([\w-]{6,})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : url;
};

type Props = {
  slides: Slide[];
  /** Alt / title text (the place name). */
  alt: string;
  lang: Lang;
  /** Category colour, used for the empty/video placeholder + chip. */
  accentColor: string;
  /** Localised category label for the corner chip (optional). */
  categoryLabel?: string;
  /** Photos uploaded in this browser (removable; their urls also appear in `slides`). */
  localImages?: LocalImage[];
  /** Enables the upload drop zone / "add photo" button. */
  onUpload?: (files: File[]) => void;
  onRemoveLocal?: (id: string) => void;
  /** Close the whole detail card. */
  onClose: () => void;
};

/**
 * Reflexive per-attraction media container with three size states:
 *   compact (fixed thumbnail)  →  large-inline (aspect-adaptive, expandable)
 *   →  full-screen (MediaLightbox).
 * Enlarging uses object-contain so nothing is cropped; vertical (9:16) clips get
 * a portrait box. Falls back to a "no image yet" placeholder when empty.
 */
export default function MediaViewer({
  slides,
  alt,
  lang,
  accentColor,
  categoryLabel,
  localImages = [],
  onUpload,
  onRemoveLocal,
  onClose,
}: Props) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [full, setFull] = useState(false);
  const [dragging, setDragging] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const count = slides.length;
  const active = slides[Math.min(index, Math.max(count - 1, 0))];
  const isVertical = active?.kind === "video" && active.video.orientation === "vertical";
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);
  const activeLocal =
    active?.kind === "image" ? localImages.find((img) => img.url === active.src) : undefined;

  const upload = (files: FileList | null) => {
    if (!onUpload || !files?.length) return;
    onUpload(Array.from(files));
  };
  const dropProps = onUpload
    ? {
        onDragOver: (e: DragEvent) => {
          e.preventDefault();
          setDragging(true);
        },
        onDragLeave: (e: DragEvent) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setDragging(false);
        },
        onDrop: (e: DragEvent) => {
          e.preventDefault();
          setDragging(false);
          upload(e.dataTransfer.files);
        },
      }
    : {};

  const cornerBtn =
    "rounded-full bg-black/45 p-1.5 text-white shadow hover:bg-black/70";

  // Viewport height: fixed & compact, or aspect-capped & tall when expanded.
  const viewportCls = expanded
    ? "flex max-h-[68vh] w-full items-center justify-center bg-black"
    : "h-40 w-full sm:h-44 bg-line";

  const mediaImgCls = expanded
    ? "w-full max-h-[60vh] object-contain"
    : "h-full w-full object-cover";

  return (
    <>
      <div className={`relative shrink-0 overflow-hidden ${viewportCls}`} {...dropProps}>
        {onUpload && (
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={(e) => {
              upload(e.target.files);
              e.target.value = "";
            }}
          />
        )}
        {count === 0 ? (
          // Empty state doubles as the upload container (click or drop images).
          <button
            type="button"
            disabled={!onUpload}
            onClick={() => fileInput.current?.click()}
            className="flex h-full w-full flex-col items-center justify-center gap-1 text-white disabled:cursor-default"
            style={{ backgroundColor: accentColor }}
          >
            <span
              className={`flex flex-col items-center gap-1 rounded-xl border-2 border-dashed px-5 py-3 transition ${
                dragging ? "border-white bg-white/15" : "border-white/50 hover:border-white hover:bg-white/10"
              }`}
            >
              <Upload size={22} />
              <span className="text-xs font-semibold">{t("uploadImage")}</span>
              <span className="text-[10px] opacity-80">{t("uploadHint")}</span>
            </span>
          </button>
        ) : active.kind === "image" ? (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-label={expanded ? t("shrink") : t("enlarge")}
            className={expanded ? "block w-full" : "block h-full w-full"}
          >
            <img src={active.src} alt={alt} loading="lazy" className={mediaImgCls} />
          </button>
        ) : expanded ? (
          active.video.type === "youtube" ? (
            <div className="aspect-video w-[min(100%,48rem)]">
              <iframe
                src={youTubeEmbed(active.video.url)}
                title={alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          ) : (
            <video
              src={active.video.url}
              controls
              autoPlay
              playsInline
              className={`bg-black object-contain ${
                isVertical ? "aspect-[9/16] max-h-[68vh]" : "max-h-[68vh] max-w-full"
              }`}
            />
          )
        ) : (
          // Compact video: poster (YouTube) or accent tile, with a play affordance.
          <button
            type="button"
            onClick={() => setExpanded(true)}
            aria-label={t("watchVideo")}
            className="relative flex h-full w-full items-center justify-center"
            style={{ backgroundColor: accentColor }}
          >
            {active.video.type === "youtube" && youTubeThumb(active.video.url) && (
              <img
                src={youTubeThumb(active.video.url)!}
                alt={alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <span className="relative rounded-full bg-black/50 p-2">
              <Play size={22} className="text-white" />
            </span>
          </button>
        )}

        {/* Prev / next (only when there are several items) */}
        {count > 1 && (
          <>
            <button
              type="button"
              aria-label={t("prevSlide")}
              onClick={() => go(-1)}
              className={`absolute left-2 top-1/2 -translate-y-1/2 ${cornerBtn}`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              aria-label={t("nextSlide")}
              onClick={() => go(1)}
              className={`absolute right-2 top-1/2 -translate-y-1/2 ${cornerBtn}`}
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Top-right controls: enlarge/shrink · full-screen · close */}
        <div className="absolute right-2 top-2 flex items-center gap-1.5">
          {activeLocal && onRemoveLocal && (
            <button
              type="button"
              onClick={() => {
                onRemoveLocal(activeLocal.id);
                setIndex((i) => Math.max(0, i - 1));
              }}
              aria-label={t("removePhoto")}
              title={t("removePhoto")}
              className={cornerBtn}
            >
              <Trash2 size={14} />
            </button>
          )}
          {count > 0 && onUpload && (
            <button
              type="button"
              onClick={() => fileInput.current?.click()}
              aria-label={t("addPhoto")}
              title={t("addPhoto")}
              className={cornerBtn}
            >
              <ImagePlus size={14} />
            </button>
          )}
          {count > 0 && (
            <>
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-label={expanded ? t("shrink") : t("enlarge")}
                className={cornerBtn}
              >
                {expanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
              </button>
              <button
                type="button"
                onClick={() => setFull(true)}
                aria-label={t("fullscreen")}
                className={cornerBtn}
              >
                <Expand size={14} />
              </button>
            </>
          )}
          <button type="button" onClick={onClose} aria-label={t("close")} className={cornerBtn}>
            <X size={16} />
          </button>
        </div>

        {categoryLabel && (
          <span
            className="absolute bottom-2 left-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow"
            style={{ backgroundColor: accentColor }}
          >
            {categoryLabel}
          </span>
        )}
        {count > 1 && (
          <span className="absolute bottom-2 right-2 rounded-full bg-black/45 px-2 py-0.5 text-[10px] font-semibold text-white">
            {index + 1}/{count}
          </span>
        )}
        {dragging && count > 0 && (
          <div className="pointer-events-none absolute inset-2 flex items-center justify-center rounded-xl border-2 border-dashed border-white bg-black/40 text-xs font-semibold text-white">
            {t("uploadHint")}
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {count > 1 && (
        <div className="flex shrink-0 gap-1.5 overflow-x-auto border-b border-line px-3 py-2">
          {slides.map((s, i) => {
            const thumb =
              s.kind === "image" ? s.src : s.video.type === "youtube" ? youTubeThumb(s.video.url) : null;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={s.kind === "video" ? t("watchVideo") : `${i + 1}`}
                className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-line ring-1 hover:ring-2 hover:ring-region-north ${
                  i === index ? "ring-2 ring-region-north" : "ring-line"
                }`}
              >
                {thumb ? (
                  <img src={thumb} alt="" loading="lazy" className="h-full w-full object-cover" />
                ) : (
                  <span className="flex h-full w-full items-center justify-center bg-black/80">
                    <Play size={16} className="text-white" />
                  </span>
                )}
                {s.kind === "video" && thumb && (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play size={16} className="text-white" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {full && (
        <MediaLightbox
          slides={slides}
          index={index}
          lang={lang}
          alt={alt}
          onIndex={setIndex}
          onClose={() => setFull(false)}
        />
      )}
    </>
  );
}
