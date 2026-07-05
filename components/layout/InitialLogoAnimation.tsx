"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export function InitialLogoAnimation() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    document.body.style.overflow = showLogo ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showLogo]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowLogo(false);
    }, 850);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLogo && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[100] bg-gotham-darker flex items-center justify-center"
        >
          <motion.div
            animate={{ opacity: [0, 0.25, 0, 0.35, 0] }}
            transition={{ duration: 0.85, times: [0, 0.2, 0.4, 0.6, 1] }}
            className="absolute inset-0 bg-primary/20"
          />

          <motion.div
            initial={{ scale: 0.6, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10"
          >
            <div className="relative h-56 w-56 md:h-72 md:w-72 drop-shadow-[0_0_30px_rgba(245,197,66,0.85)]">
              <Image
                src="/batman-logo.png"
                alt="Batman"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.4, opacity: 0.7 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="absolute h-72 w-72 rounded-full bg-primary/35 blur-3xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
