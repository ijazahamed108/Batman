"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { personalInfo } from "@/data/content";
import { fadeUp, fadeUpDelayed } from "@/lib/motion";
import { useTranslation } from "@/lib/useTranslation";

export function Footer() {
  const t = useTranslation();

  return (
    <footer className="relative border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mb-12">
            <h3 className="mb-6 text-center font-display text-2xl font-bold">
              <span className="text-primary">{t.footer.recognition}</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {t.footer.awards.map((award, index) => (
                <motion.div
                  key={award}
                  {...fadeUpDelayed(Math.min(index * 0.04, 0.28))}
                  className="glass-panel glow-border rounded-lg px-4 py-2 text-sm font-medium"
                >
                  🏆 {award}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUpDelayed(0.12)} className="space-y-4 text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} {personalInfo.name}. {t.footer.allRights}
            </p>
            <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              {t.footer.builtWith}{" "}
              <Heart className="h-4 w-4 fill-primary text-primary" /> {t.footer.using}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
