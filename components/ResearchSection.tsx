// --- Section: RL Frontier Research ---
"use client";

import { researchPillars } from "@/content/data";
import { fadeInUp, staggerChildren, viewportConfig } from "@/lib/motion";
import { motion } from "framer-motion";

export function ResearchSection() {
  return (
    <section id="research" className="anime-section research section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerChildren}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--flat-lime)]"
        >
          RL Frontier Research
        </motion.span>
        <motion.h2 variants={fadeInUp} className="section-title mt-4">
          Shaping the Next Wave of Adaptive Intelligence
        </motion.h2>
        <div className="title-underline" aria-hidden="true" />
        <motion.p variants={fadeInUp} className="mt-4 text-white/70">
          ReinforceLab invests in frameworks that push the boundaries of
          performance, safety, and cultural alignment so every deployment stays
          benchmarked, introspective, and responsible.
        </motion.p>
      </motion.div>
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-14 grid gap-6 md:grid-cols-2"
      >
        {researchPillars.map((pillar) => (
          <motion.div
            key={pillar.name}
            variants={fadeInUp}
            className="anime-card glass-panel rounded-2xl p-6"
          >
            <h3 className="font-display text-xl text-white">{pillar.name}</h3>
            <p className="mt-3 text-sm text-white/70">{pillar.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
