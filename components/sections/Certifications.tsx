"use client";

import { animate, motion, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { certifications } from "@/data/content";
import { fadeUp } from "@/lib/motion";
import { useTranslation } from "@/lib/useTranslation";
import { CertificateHoverPreview, prefetchCertificateImages } from "@/components/ui/CertificateHoverPreview";
import { useEffect, useRef, useState } from "react";

const DRAG_LIMIT = 1500;
const SCROLL_STEP = 196;
const SCROLL_TRANSITION = { type: "tween" as const, duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const };

type HoverState = {
  index: number;
  rect: DOMRect;
  cert: (typeof certifications)[number];
} | null;

export function Certifications() {
  const t = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<ReturnType<typeof animate> | null>(null);
  const hoverTimeoutRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [hovered, setHovered] = useState<HoverState>(null);
  const x = useMotionValue(0);
  const progressWidth = useTransform(x, [0, -DRAG_LIMIT], ["8%", "100%"]);

  useMotionValueEvent(x, "change", (latest) => {
    setAtStart(latest >= -8);
    setAtEnd(latest <= -DRAG_LIMIT + 8);
  });

  // Prefetch certificate images so hover switches feel instant
  useEffect(() => {
    prefetchCertificateImages(certifications.map((cert) => cert.url));
  }, []);

  const scrollBy = (direction: "left" | "right") => {
    setHasInteracted(true);
    setHovered(null);
    scrollAnimationRef.current?.stop();

    const current = x.get();
    const next =
      direction === "left"
        ? Math.min(0, current + SCROLL_STEP)
        : Math.max(-DRAG_LIMIT, current - SCROLL_STEP);

    scrollAnimationRef.current = animate(x, next, SCROLL_TRANSITION);
  };

  const clearHoverSoon = () => {
    if (hoverTimeoutRef.current) window.clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = window.setTimeout(() => setHovered(null), 120);
  };

  const showHover = (
    index: number,
    cert: (typeof certifications)[number],
    element: HTMLElement
  ) => {
    if (isDragging) return;
    if (hoverTimeoutRef.current) window.clearTimeout(hoverTimeoutRef.current);
    setHovered({
      index,
      cert,
      rect: element.getBoundingClientRect(),
    });
  };

  // Triple the certifications for infinite scroll effect
  const extendedCerts = [...certifications, ...certifications, ...certifications];

  return (
    <section id="certifications" className="section-shell py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp}>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            {t.certifications.title}{" "}
            <span className="text-primary">{t.certifications.titleHighlight}</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {t.certifications.subtitle}
          </p>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gotham-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gotham-dark to-transparent z-10 pointer-events-none" />

            <motion.button
              type="button"
              initial={{ opacity: 1 }}
              animate={{ opacity: hasInteracted && atStart ? 0.35 : 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => scrollBy("left")}
              disabled={atStart}
              whileTap={{ scale: 0.92 }}
              aria-label={t.certifications.scrollLeft}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full glass-panel glow-border px-2 py-2 text-primary transition-colors hover:border-primary/60 hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <motion.span
                animate={atStart ? { x: 0 } : { x: [-2, -8, -2] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.span>
            </motion.button>

            <motion.button
              type="button"
              initial={{ opacity: 1 }}
              animate={{ opacity: hasInteracted && atEnd ? 0.35 : 1 }}
              transition={{ duration: 0.4 }}
              onClick={() => scrollBy("right")}
              disabled={atEnd}
              whileTap={{ scale: 0.92 }}
              aria-label={t.certifications.scrollRight}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full glass-panel glow-border px-2 py-2 text-primary transition-colors hover:border-primary/60 hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <motion.span
                animate={atEnd ? { x: 0 } : { x: [2, 8, 2] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.span>
            </motion.button>

            <div className="overflow-hidden py-4">
              <motion.div
                ref={scrollRef}
                drag="x"
                dragConstraints={{ left: -DRAG_LIMIT, right: 0 }}
                dragElastic={0.1}
                onDragStart={() => {
                  setIsDragging(true);
                  setHasInteracted(true);
                  setHovered(null);
                }}
                onDragEnd={() => setIsDragging(false)}
                style={{ x }}
                className="flex gap-4 cursor-grab active:cursor-grabbing"
              >
                {extendedCerts.map((cert, index) => (
                  <motion.div
                    key={`${cert.title}-${index}`}
                    whileHover={{ scale: isDragging ? 1 : 1.05 }}
                    onMouseEnter={(event) =>
                      showHover(index, cert, event.currentTarget)
                    }
                    onMouseLeave={clearHoverSoon}
                    onFocus={(event) =>
                      showHover(index, cert, event.currentTarget)
                    }
                    onBlur={clearHoverSoon}
                    className="glass-panel glow-border rounded-lg p-4 flex-shrink-0 w-[180px] hover:border-primary/40 transition-all group relative"
                    style={{ pointerEvents: isDragging ? "none" : "auto" }}
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-xs leading-tight mb-1 line-clamp-2">
                          {cert.title}
                        </h3>
                        <p className="text-[10px] text-muted-foreground mb-2">
                          {cert.platform}
                        </p>
                      </div>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => isDragging && e.preventDefault()}
                        className="flex items-center gap-1 text-[10px] text-primary hover:text-primary/80 transition-colors"
                      >
                        {t.certifications.view}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="mt-4 px-6">
              <div
                className="relative h-1.5 rounded-full bg-muted/40 overflow-hidden"
                aria-hidden="true"
              >
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-primary shadow-[0_0_12px_rgba(245,197,66,0.45)]"
                  style={{ width: progressWidth }}
                />
              </div>

              <motion.p
                initial={{ opacity: 1 }}
                animate={{ opacity: hasInteracted ? 0.6 : 1 }}
                className="mt-3 text-center text-xs text-muted-foreground flex items-center justify-center gap-2"
              >
                <ChevronLeft className="w-3.5 h-3.5 text-primary" />
                <span>{t.certifications.dragHint}</span>
                <ChevronRight className="w-3.5 h-3.5 text-primary" />
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      <CertificateHoverPreview
        open={!!hovered && !isDragging}
        anchorRect={hovered?.rect ?? null}
        certTitle={hovered?.cert.title ?? ""}
        platform={hovered?.cert.platform ?? ""}
        url={hovered?.cert.url ?? ""}
        labels={{
          verified: t.certifications.verified,
          openCertificate: t.certifications.openCertificate,
          loading: t.certifications.loadingPreview,
          previewUnavailable: t.certifications.previewUnavailable,
        }}
      />
    </section>
  );
}
