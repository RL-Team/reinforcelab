// --- Section: Solutions Gallery ---
"use client";

import { solutions } from "@/content/data";
import { fadeInUp, staggerChildren, viewportConfig } from "@/lib/motion";
import { motion } from "framer-motion";

export function SolutionsGallery() {
  return (
    <section id="solutions" className="anime-section solutions section-container">
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
          Solutions
        </motion.span>
        <motion.h2 variants={fadeInUp} className="section-title mt-4">
          Built-for-Impact RL Solution Gallery
        </motion.h2>
        <div className="title-underline" aria-hidden="true" />
        <motion.p variants={fadeInUp} className="mt-4 text-white/70">
          Each solution ships with embedded measurement, governance, and
          Agentic Guardrails to jumpstart production impact across growth,
          operations, and intelligence workloads.
        </motion.p>
      </motion.div>
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {solutions.map((solution) => (
          <motion.div
            key={solution.name}
            variants={fadeInUp}
            whileHover={{ y: -10, scale: 1.02 }}
            className="anime-card anime-card-green relative overflow-hidden rounded-2xl p-6 transition"
          >
            <div className="relative">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-lg">{solution.name}</h3>
              </div>
              <p className="mt-4 text-sm">{solution.summary}</p>
              <ul className="mt-5 space-y-3 text-sm">
                {solution.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--green-border)]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
