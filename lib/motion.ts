export const easeSmooth = [0.25, 0.1, 0.25, 1] as const;

export const sectionViewport = {
  once: true,
  amount: 0.18,
  margin: "-72px 0px -72px 0px" as const,
};

export const sectionTransition = {
  duration: 0.48,
  ease: easeSmooth,
};

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: sectionViewport,
  transition: sectionTransition,
};

export const fadeUpDelayed = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: sectionViewport,
  transition: { ...sectionTransition, delay },
});

export const slideIn = (direction: "left" | "right" = "left", delay = 0) => ({
  initial: { opacity: 0, x: direction === "left" ? -32 : 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: sectionViewport,
  transition: { ...sectionTransition, delay },
});
