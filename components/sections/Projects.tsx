"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/content";
import { easeSmooth, fadeUp } from "@/lib/motion";
import { useTranslation } from "@/lib/useTranslation";

const filterKeys = ["All", "React", "Node.js", "AWS", "Java"] as const;

export function Projects() {
  const t = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category.includes(selectedCategory));

  return (
    <section id="projects" className="section-shell py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp}>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            {t.projects.title}{" "}
            <span className="text-primary">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8">{t.projects.subtitle}</p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filterKeys.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {category === "All" ? t.projects.all : category}
              </button>
            ))}
          </div>

          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                  const itemKey = project.id as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
                  const item = t.projects.items[itemKey];

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{
                      duration: 0.24,
                      delay: Math.min(index * 0.04, 0.2),
                      ease: easeSmooth,
                    }}
                  >
                    <Card className="glass-panel glow-border h-full hover:border-primary/40 transition-all group">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                            <Code2 className="w-6 h-6" />
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="p-2 rounded-lg hover:bg-primary/10 cursor-pointer"
                          >
                            <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                          </motion.div>
                        </div>
                        <CardTitle className="text-xl font-display">
                          {item?.title ?? project.title}
                        </CardTitle>
                        <CardDescription>
                          {item?.description ?? project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-muted/50 border border-border rounded-lg text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
