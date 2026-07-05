"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Cloud, Layers, MapPin, Sparkles, Target } from "lucide-react";
import { aboutPitch, personalInfo } from "@/data/content";
import { useRef } from "react";

const pillarIcons = [Cloud, Layers, Target];

function PitchParagraph({
  text,
  index,
  progress,
  reduceMotion,
}: Readonly<{
  text: string;
  index: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
}>) {
  const opacity = useTransform(
    progress,
    [0.22 + index * 0.08, 0.42 + index * 0.08],
    [0, 1]
  );
  const y = useTransform(
    progress,
    [0.22 + index * 0.08, 0.46 + index * 0.08],
    [28, 0]
  );

  if (reduceMotion) {
    return (
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{text}</p>
    );
  }

  return (
    <motion.p
      style={{ opacity, y }}
      className="text-base md:text-lg text-muted-foreground leading-relaxed"
    >
      {text}
    </motion.p>
  );
}

function PitchPillar({
  title,
  description,
  index,
  progress,
  reduceMotion,
}: Readonly<{
  title: string;
  description: string;
  index: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
}>) {
  const Icon = pillarIcons[index] ?? Sparkles;
  const opacity = useTransform(
    progress,
    [0.38 + index * 0.08, 0.58 + index * 0.08],
    [0, 1]
  );
  const y = useTransform(
    progress,
    [0.38 + index * 0.08, 0.62 + index * 0.08],
    [36, 0]
  );

  const content = (
    <>
      <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-2 font-display text-lg font-bold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </>
  );

  if (reduceMotion) {
    return (
      <div className="glass-panel glow-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
        {content}
      </div>
    );
  }

  return (
    <motion.div
      style={{ opacity, y }}
      className="glass-panel glow-border rounded-2xl p-6 hover:border-primary/40 transition-colors"
    >
      {content}
    </motion.div>
  );
}

export function About() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.35"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [0, 0.92, 1]);
  const sectionY = useTransform(scrollYProgress, [0, 1], [48, 0]);
  const headlineOpacity = useTransform(scrollYProgress, [0.12, 0.4], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [0.12, 0.45], [40, 0]);
  const panelOpacity = useTransform(scrollYProgress, [0.18, 0.55], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.9], [0, 0.4, 0]);
  const highlightsOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-shell relative -mt-8 md:-mt-12 overflow-hidden py-16 md:py-24"
    >
      <motion.div
        style={
          reduceMotion ? undefined : { opacity: sectionOpacity, y: sectionY }
        }
        className="container mx-auto px-4 will-change-transform"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center md:mb-14">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-primary">
              The Origin Story
            </p>
            <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">
              The Engineer Behind the <span className="text-primary">Mask</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                {personalInfo.location}
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span>Rooted in {personalInfo.originLocation}</span>
            </div>
          </div>

          <motion.div
            style={reduceMotion ? undefined : { opacity: panelOpacity }}
            className="relative overflow-hidden rounded-3xl glass-panel glow-border p-8 md:p-12"
          >
            {!reduceMotion && (
              <motion.div
                aria-hidden="true"
                style={{ opacity: glowOpacity }}
                className="pointer-events-none absolute -top-16 left-1/2 h-40 w-[130%] -translate-x-1/2 bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl"
              />
            )}

            <motion.div
              style={
                reduceMotion ? undefined : { opacity: headlineOpacity, y: headlineY }
              }
              className="relative mb-8 space-y-4 border-b border-border/50 pb-8"
            >
              <h3 className="font-display text-2xl font-bold leading-tight text-foreground md:text-4xl">
                {aboutPitch.headline}
              </h3>
              <p className="text-base text-primary md:text-lg">{aboutPitch.subheadline}</p>
            </motion.div>

            <div className="relative mb-8 space-y-5">
              {aboutPitch.paragraphs.map((paragraph, index) => (
                <PitchParagraph
                  key={paragraph.slice(0, 24)}
                  text={paragraph}
                  index={index}
                  progress={scrollYProgress}
                  reduceMotion={!!reduceMotion}
                />
              ))}
            </div>

            <div className="relative mb-8 grid gap-4 md:grid-cols-3">
              {aboutPitch.pillars.map((pillar, index) => (
                <PitchPillar
                  key={pillar.title}
                  title={pillar.title}
                  description={pillar.description}
                  index={index}
                  progress={scrollYProgress}
                  reduceMotion={!!reduceMotion}
                />
              ))}
            </div>

            <motion.div
              style={reduceMotion ? undefined : { opacity: highlightsOpacity }}
              className="relative flex flex-wrap justify-center gap-3"
            >
              {aboutPitch.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
