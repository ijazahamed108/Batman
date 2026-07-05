"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-primary/80 via-primary to-primary/80 shadow-[0_0_12px_rgba(245,197,66,0.45)]"
    />
  );
}
