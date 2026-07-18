"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experience } from "@/data/content";
import Image from "next/image";
import { fadeUp, slideIn } from "@/lib/motion";
import { useTranslation } from "@/lib/useTranslation";

export function Experience() {
  const t = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="section-shell py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp}>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            {t.experience.title}{" "}
            <span className="text-primary">{t.experience.titleHighlight}</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">{t.experience.subtitle}</p>

          <div className="max-w-5xl mx-auto">
            {experience.map((job, index) => {
              const id = job.id as 1 | 2 | 3 | 4;
              const role = t.experience.roles[id] ?? job.role;
              const location = t.experience.locations[id] ?? job.location;
              const period = t.experience.periods[id] ?? job.period;
              const achievements = t.experience.achievements[id] ?? job.achievements;

              return (
                <motion.div
                  key={job.id}
                  {...slideIn(index % 2 === 0 ? "left" : "right", index * 0.08)}
                  className="relative pl-8 pb-12 last:pb-0"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {index !== experience.length - 1 && (
                    <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 to-transparent" />
                  )}

                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-primary shadow-[0_0_20px_rgba(245,197,66,0.5)] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gotham-dark" />
                  </div>

                  <div className="glass-panel glow-border p-6 rounded-xl hover:border-primary/40 transition-all relative overflow-hidden">
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
                        animate={{
                          x: index % 2 === 0 ? 200 : -200,
                          opacity: [0, 0.1, 0],
                        }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      >
                        <Image
                          src="/batman-logo.png"
                          alt="Batman"
                          width={300}
                          height={300}
                          className="object-contain"
                        />
                      </motion.div>
                    )}

                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4 relative z-10">
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-bold text-primary mb-1">
                          {role}
                        </h3>
                        <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{period}</span>
                          </div>
                        </div>
                      </div>
                      {job.logo && (
                        <a
                          href={job.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-32 h-32 flex-shrink-0 hover:scale-110 transition-transform"
                        >
                          <Image
                            src={job.logo}
                            alt={job.company}
                            fill
                            className="object-contain"
                          />
                        </a>
                      )}
                    </div>

                    <ul className="space-y-2 mb-4 relative z-10">
                      {achievements.map((achievement) => (
                        <li key={achievement.slice(0, 40)} className="text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1.5">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 relative z-10">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
