import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Lang, PlaceVideo } from "../types";
import { L } from "../lib/localize";

/** One item in the lightbox carousel. */
export type Slide =
  | { kind: "image"; src: string }
  | { kind: "video"; video: PlaceVideo };

/** Convert a YouTube watch/short URL into an embeddable URL. */
const youTubeEmbed = (url: string) => {
  const m = url.match(/(?:youtu\.be\/|[?&]v=|\/embed\/)([\w-]{6,})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : url;
};

type Props = {
  slides: Slide[];
  index: number;
  lang: Lang;
  alt: string;
  onIndex: (i: number) => void;
  onClose: () => void;
};

/**
 * Full-screen media viewer rendered via a portal to <body> so it escapes the
 * detail card's `overflow-hidden` / `absolute` container. Vertical (9:16)
 * videos render in a portrait frame; everything else is letterboxed.
 */
export default function MediaLightbox({ slides, index, lang, alt, onIndex, onClose }: Props) {
  const { t } = useTranslation();
  const count = slides.length;
  const go = (delta: number) => onIndex((index + delta + count) % count);

  // Esc / arrow keys + lock background scroll while open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" && count > 1) onIndex((index + 1) % count);
      else if (e.key === "ArrowLeft" && count > 1) onIndex((index - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, count, onClose, onIndex]);

  const slide = slides[index];
  if (!slide) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={t("close")}
        className="absolute right-3 top-3 rounded-full bg-white/15 p-2 text-white hover:bg-white/30"
      >
        <X size={20} />
      </button>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label={t("prevSlide")}
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white hover:bg-white/30"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            aria-label={t("nextSlide")}
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white hover:bg-white/30"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Stop propagation so clicking the media doesn't close the overlay. */}
      <div className="flex max-h-full max-w-full items-center justify-center" onClick={(e) => e.stopPropagation()}>
        {slide.kind === "image" ? (
          <img src={slide.src} alt={alt} className="max-h-[88vh] max-w-full rounded-lg object-contain" />
        ) : slide.video.type === "youtube" ? (
          <div className="aspect-video w-[min(90vw,56rem)]">
            <iframe
              src={youTubeEmbed(slide.video.url)}
              title={slide.video.title ? L(slide.video.title, lang) : alt}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-lg border-0"
            />
          </div>
        ) : (
          <video
            src={slide.video.url}
            controls
            autoPlay
            playsInline
            className={`rounded-lg bg-black object-contain ${
              slide.video.orientation === "vertical"
                ? "aspect-[9/16] max-h-[88vh]"
                : "max-h-[88vh] max-w-[90vw]"
            }`}
          />
        )}
      </div>

      {count > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
          {index + 1} / {count}
        </div>
      )}
    </div>,
    document.body
  );
}
