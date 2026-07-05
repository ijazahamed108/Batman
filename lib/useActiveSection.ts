"use client";

import { useEffect, useState } from "react";

export const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "certifications",
  "education",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

const NAV_OFFSET = 88;

function getActiveSection(): SectionId {
  const bottomReached =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 96;

  if (bottomReached) {
    return "contact";
  }

  for (const section of SECTION_IDS) {
    const element = document.getElementById(section);
    if (!element) continue;

    const rect = element.getBoundingClientRect();
    if (rect.top <= NAV_OFFSET && rect.bottom >= NAV_OFFSET) {
      return section;
    }
  }

  return "home";
}

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setActiveSection(getActiveSection());
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return activeSection;
}

export function scrollToSection(id: SectionId | string) {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
