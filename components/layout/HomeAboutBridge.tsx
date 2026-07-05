"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function HomeAboutBridge() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glowOpacity = useTransform(scrollYProgress, [0.15, 0.45, 0.75], [0, 1, 0]);
  const lineScale = useTransform(scrollYProgress, [0.2, 0.55, 0.85], [0, 1, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.7, 0.9], [0, 1, 1, 0]);
  const logoScale = useTransform(scrollYProgress, [0.38, 0.52, 0.68], [0.4, 1, 0.6]);
  const logoOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.72], [0, 1, 0]);
  const streakLeft = useTransform(scrollYProgress, [0.25, 0.55], ["-100%", "0%"]);
  const streakRight = useTransform(scrollYProgress, [0.25, 0.55], ["100%", "0%"]);
  const sparkOpacity = useTransform(scrollYProgress, [0.32, 0.5, 0.78], [0, 0.75, 0]);
  const sparkY = useTransform(scrollYProgress, [0.32, 0.72], [16, -28]);

  if (reduceMotion) {
    return (
      <div
        aria-hidden="true"
        className="relative -mt-16 h-px md:-mt-20"
      >
        <div className="mx-auto h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative h-28 md:h-36 -mt-20 md:-mt-28 pointer-events-none z-30 overflow-visible"
    >
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,720px)] h-40 bg-gradient-radial from-primary/35 via-primary/10 to-transparent blur-3xl"
      />

      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center px-6">
        <motion.div
          style={{ x: streakLeft, opacity: lineOpacity }}
          className="h-px w-1/2 bg-gradient-to-r from-transparent to-primary/80"
        />
        <motion.div
          style={{ scale: logoScale, opacity: logoOpacity }}
          className="relative mx-4 h-14 w-14 md:h-16 md:w-16 shrink-0"
        >
          <Image
            src="/batman-logo.png"
            alt=""
            fill
            className="object-contain drop-shadow-[0_0_24px_rgba(245,197,66,0.75)]"
          />
        </motion.div>
        <motion.div
          style={{ x: streakRight, opacity: lineOpacity }}
          className="h-px w-1/2 bg-gradient-to-l from-transparent to-primary/80"
        />
      </div>

      <div className="absolute inset-x-8 md:inset-x-16 top-1/2 -translate-y-1/2">
        <motion.div
          style={{ scaleX: lineScale, opacity: lineOpacity }}
          className="h-[2px] origin-center bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_18px_rgba(245,197,66,0.85)]"
        />
      </div>

      <motion.div
        style={{ opacity: sparkOpacity, y: sparkY }}
        className="absolute left-[42%] top-1/2 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(245,197,66,0.9)]"
      />
      <motion.div
        style={{ opacity: sparkOpacity, y: sparkY }}
        className="absolute left-[58%] top-1/2 h-1 w-1 rounded-full bg-primary/80"
      />
    </div>
  );
}
