"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div aria-hidden="true" className="relative h-px w-full max-w-5xl mx-auto px-4">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="h-px origin-center bg-gradient-to-r from-transparent via-primary/35 to-transparent"
      />
    </div>
  );
}
