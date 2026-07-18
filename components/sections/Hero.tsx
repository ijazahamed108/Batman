"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MediumIcon } from "@/components/ui/MediumIcon";
import { personalInfo } from "@/data/content";
import { BatmanLogo } from "@/components/ui/BatmanLogo";
import { useTranslation } from "@/lib/useTranslation";
import { scrollToSection } from "@/lib/useActiveSection";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
  const t = useTranslation();
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.55, 1], [0.82, 0.92, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.7, 0.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -72]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const spotlightOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [0.2, 0.08, 0]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  const scrollToSectionId = (id: string) => {
    scrollToSection(id);
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg"
    >
      {/* Home Page Background */}
      <motion.div
        style={
          reduceMotion
            ? undefined
            : { opacity: backgroundOpacity }
        }
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/homePagebackgroundLogo.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter:
              "drop-shadow(0 0 50px rgba(0, 150, 255, 0.6)) drop-shadow(0 0 100px rgba(0, 150, 255, 0.4))",
          }}
        />
      </motion.div>

      {/* Animated Background Gradient */}
      <motion.div
        style={reduceMotion ? undefined : { opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-gotham-darker via-gotham-dark/95 to-transparent"
      />

      {/* Bottom blend into site background */}
      <div className="absolute inset-x-0 bottom-0 h-56 md:h-72 bg-gradient-to-b from-transparent via-gotham-dark/70 to-gotham-dark z-[1] pointer-events-none" />
      
      {/* Thunderbolt Lightning Effect */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0, 1, 0] }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatDelay: 3.6,
          times: [0, 0.2, 0.4, 0.6, 1],
        }}
      >
        <motion.path
          d="M 30 0 L 35 30 L 25 30 L 32 60 L 40 35 L 35 35 L 40 0 Z"
          fill="none"
          stroke="#00d9ff"
          strokeWidth="0.3"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatDelay: 3.6,
            times: [0, 0.3, 0.7, 1],
          }}
        />
        <motion.path
          d="M 65 20 L 70 45 L 62 45 L 68 75 L 75 50 L 70 50 L 73 20 Z"
          fill="none"
          stroke="#00d9ff"
          strokeWidth="0.3"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatDelay: 3.6,
            times: [0, 0.3, 0.7, 1],
            delay: 0.1,
          }}
        />
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </motion.svg>
      
      {/* Floating Batman Logos */}
      <motion.div
        className="absolute top-20 left-10 opacity-10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <BatmanLogo className="w-32 h-32 text-primary" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 opacity-10"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <BatmanLogo className="w-40 h-40 text-primary" />
      </motion.div>
      
      {/* Spotlight Effect */}
      <motion.div
        style={{ opacity: spotlightOpacity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px]"
        animate={{
          x: ["-50%", "-45%", "-55%", "-50%"],
          y: [0, -20, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-gotham-signal/30 via-gotham-signal/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={
          reduceMotion
            ? undefined
            : { opacity: contentOpacity, y: contentY, scale: contentScale }
        }
        className="container mx-auto px-4 relative z-10 will-change-transform"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-4 py-2 rounded-full glass-panel glow-border"
            >
              <span className="text-sm text-primary font-medium">
                {t.hero.tagline}
              </span>
            </motion.div>

            <div className="relative w-full max-w-3xl mx-auto h-32 mb-6">
              <Image
                src="/name.png"
                alt={personalInfo.name}
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(245,197,66,0.6)]"
                priority
              />
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              {t.hero.role}
            </p>

            <p className="text-lg text-primary mb-8">{t.hero.subtitle}</p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Button
                variant="glow"
                size="lg"
                onClick={() => scrollToSectionId("projects")}
              >
                {t.hero.viewProjects}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSectionId("contact")}
              >
                {t.hero.contactMe}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg glass-panel glow-border-hover"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg glass-panel glow-border-hover"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href={personalInfo.medium}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg glass-panel glow-border-hover"
                aria-label="Medium"
              >
                <MediumIcon className="w-6 h-6" />
              </motion.a>
              <motion.a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg glass-panel glow-border-hover"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg glass-panel glow-border-hover"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        type="button"
        onClick={() => scrollToSectionId("about")}
        aria-label={t.hero.scrollToAbout}
        style={reduceMotion ? undefined : { opacity: scrollHintOpacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full p-2 text-primary transition-colors hover:bg-primary/10"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
