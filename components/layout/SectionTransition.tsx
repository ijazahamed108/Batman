"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { type SectionId, useActiveSection } from "@/lib/useActiveSection";
import { useTranslation } from "@/lib/useTranslation";

const SKIP_TRANSITIONS = new Set<string>(["home>about"]);
const HIDDEN_SECTION_CUES = new Set<SectionId>(["home"]);

export function SectionTransition() {
  const t = useTranslation();
  const activeSection = useActiveSection();
  const [displaySection, setDisplaySection] = useState<SectionId | null>(null);
  const lastSectionRef = useRef<SectionId>("home");
  const timeoutRef = useRef<number | null>(null);

  const sectionLabels: Record<SectionId, string> = {
    home: t.nav.home,
    about: t.nav.about,
    skills: t.nav.skills,
    experience: t.nav.experience,
    projects: t.nav.projects,
    certifications: t.nav.certifications,
    education: t.nav.education,
    contact: t.nav.contact,
  };

  useEffect(() => {
    const previous = lastSectionRef.current;
    const transitionKey = `${previous}>${activeSection}`;

    if (
      previous !== activeSection &&
      !SKIP_TRANSITIONS.has(transitionKey) &&
      !HIDDEN_SECTION_CUES.has(activeSection)
    ) {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      setDisplaySection(activeSection);
      timeoutRef.current = window.setTimeout(() => setDisplaySection(null), 520);
    }

    lastSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(
    () => () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    },
    []
  );

  return (
    <AnimatePresence mode="wait">
      {displaySection && (
        <motion.div
          key={displaySection}
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
          className="pointer-events-none fixed bottom-8 right-6 z-40 md:bottom-10 md:right-10"
        >
          <div className="glass-panel glow-border flex items-center gap-3 rounded-full px-4 py-2 shadow-lg shadow-primary/10">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 28 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="h-px bg-primary"
            />
            <span className="font-display text-xs font-bold uppercase tracking-[0.22em] text-primary">
              {sectionLabels[displaySection]}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
