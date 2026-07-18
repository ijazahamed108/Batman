"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Award, ExternalLink, Loader2, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

export type LinkPreviewData = {
  url: string;
  title: string | null;
  description: string | null;
  image: string | null;
  screenshot: string | null;
  siteName: string | null;
};

type CertificateHoverPreviewProps = Readonly<{
  open: boolean;
  anchorRect: DOMRect | null;
  certTitle: string;
  platform: string;
  url: string;
  labels: {
    verified: string;
    openCertificate: string;
    loading: string;
    previewUnavailable: string;
  };
}>;

const previewCache = new Map<string, LinkPreviewData>();
const preloadedImages = new Set<string>();

function getUdemyCertificateImage(url: string): string | null {
  const match = /udemy\.com\/certificate\/(UC-[A-Za-z0-9-]+)/i.exec(url);
  if (!match) return null;
  return `https://udemy-certificate.s3.amazonaws.com/image/${match[1]}.jpg`;
}

function getCourseraCertificateImage(url: string): string | null {
  const match =
    /coursera\.org\/account\/accomplishments\/(?:verify|certificate)\/([A-Z0-9]+)/i.exec(
      url
    );
  if (!match) return null;
  const id = match[1];
  return `https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~${id}/CERTIFICATE_LANDING_PAGE~${id}.jpeg`;
}

export function getKnownCertificateImage(url: string): string | null {
  return getUdemyCertificateImage(url) ?? getCourseraCertificateImage(url);
}

function resolvePreview(
  url: string,
  certTitle: string,
  platform: string
): LinkPreviewData {
  const cached = previewCache.get(url);
  if (cached) return cached;

  return {
    url,
    title: certTitle,
    description: null,
    image: getKnownCertificateImage(url),
    screenshot: null,
    siteName: platform,
  };
}

function preloadImage(src: string) {
  if (!src || preloadedImages.has(src) || typeof window === "undefined") return;
  preloadedImages.add(src);
  const img = new window.Image();
  img.decoding = "async";
  img.src = src;
}

export function prefetchCertificateImages(urls: string[]) {
  urls.forEach((url) => {
    const src = getKnownCertificateImage(url);
    if (src) preloadImage(src);
  });
}

export function CertificateHoverPreview({
  open,
  anchorRect,
  certTitle,
  platform,
  url,
  labels,
}: CertificateHoverPreviewProps) {
  const [mounted, setMounted] = useState(false);
  const [cacheTick, setCacheTick] = useState(0);
  const [imageReady, setImageReady] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const preview = useMemo(
    () => resolvePreview(url, certTitle, platform),
    // cacheTick forces re-read after API enrichment
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url, certTitle, platform, cacheTick]
  );

  const previewImage = preview.image || preview.screenshot;

  useEffect(() => {
    if (!previewImage) {
      setImageReady(false);
      return;
    }

    if (preloadedImages.has(previewImage)) {
      setImageReady(true);
      return;
    }

    setImageReady(false);
    let cancelled = false;
    const img = new window.Image();
    img.decoding = "async";
    img.onload = () => {
      if (cancelled) return;
      preloadedImages.add(previewImage);
      setImageReady(true);
    };
    img.onerror = () => {
      if (!cancelled) setImageReady(false);
    };
    img.src = previewImage;

    return () => {
      cancelled = true;
    };
  }, [previewImage]);

  useEffect(() => {
    if (!open || !url) return;

    // Warm the known CDN image immediately — no API wait
    const known = getKnownCertificateImage(url);
    if (known) preloadImage(known);

    const cached = previewCache.get(url);
    if (cached?.title && (cached.image || cached.screenshot)) return;

    let cancelled = false;

    fetch(`/api/link-preview?url=${encodeURIComponent(url)}`)
      .then(async (response) => {
        if (!response.ok) throw new Error("Preview failed");
        return response.json() as Promise<LinkPreviewData>;
      })
      .then((data) => {
        if (cancelled) return;
        // Prefer known CDN image (faster / more reliable) over remote meta
        const merged: LinkPreviewData = {
          ...data,
          title: data.title || certTitle,
          image: known || data.image,
          siteName: data.siteName || platform,
        };
        previewCache.set(url, merged);
        if (merged.image) preloadImage(merged.image);
        if (merged.screenshot) preloadImage(merged.screenshot);
        setCacheTick((tick) => tick + 1);
      })
      .catch(() => {
        // Optimistic known-image preview already shown via resolvePreview
      });

    return () => {
      cancelled = true;
    };
  }, [open, url, certTitle, platform]);

  if (!mounted || !open || !anchorRect || !url) return null;

  const cardWidth = 320;
  const cardHeight = 280;
  const gap = 14;

  let left = anchorRect.left + anchorRect.width / 2 - cardWidth / 2;
  left = Math.max(12, Math.min(left, window.innerWidth - cardWidth - 12));

  const spaceAbove = anchorRect.top;
  const placeAbove = spaceAbove > cardHeight + gap + 24;
  const top = placeAbove
    ? anchorRect.top - cardHeight - gap
    : anchorRect.bottom + gap;

  const showImage = Boolean(previewImage && imageReady);

  return createPortal(
    <AnimatePresence mode="wait">
      <motion.div
        key={url}
        initial={{ opacity: 0, y: placeAbove ? 6 : -6, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: placeAbove ? 4 : -4, scale: 0.98 }}
        transition={{ duration: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ left, top, width: cardWidth }}
        className="pointer-events-none fixed z-[80]"
      >
        <div className="glass-panel glow-border overflow-hidden rounded-2xl border-primary/30 shadow-2xl shadow-black/50">
          <div className="relative h-44 bg-gotham-darker">
            {showImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={previewImage!}
                alt={preview.title || certTitle}
                className="h-full w-full object-contain bg-white/95 p-2"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/10 via-gotham-dark to-gotham-darker px-4 text-center">
                {previewImage ? (
                  <>
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                    <p className="text-xs text-muted-foreground">{labels.loading}</p>
                  </>
                ) : (
                  <>
                    <Award className="h-8 w-8 text-primary" />
                    <p className="text-xs text-muted-foreground">
                      {labels.previewUnavailable}
                    </p>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="space-y-2 p-3">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              {labels.verified}
              <span className="text-muted-foreground">· {platform}</span>
            </div>
            <h4 className="line-clamp-2 font-display text-sm font-bold leading-snug text-foreground">
              {preview.title || certTitle}
            </h4>
            {preview.description && (
              <p className="line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
                {preview.description}
              </p>
            )}
            <div className="flex items-center gap-1 pt-1 text-[11px] font-medium text-primary">
              <ExternalLink className="h-3 w-3" />
              {labels.openCertificate}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
