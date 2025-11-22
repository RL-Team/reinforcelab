// --- Section: Brand Assets ---
"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerChildren, viewportConfig } from "@/lib/motion";
import { BrandMark } from "@/components/BrandMark";

const symbols = [
  { title: "Logomark", body: "ReinforceLab primary mark", glyph: "π" },
  { title: "Policy Graph", body: "Policy convergence and alignment", glyph: "Φ" },
  { title: "Agentic Guardrails", body: "Controlled exploration and safety", glyph: "Λ" },
  { title: "Simulation Grid", body: "Simulation-first experimentation", glyph: "Ξ" },
  { title: "Reward Curves", body: "Reward shaping and outcomes", glyph: "Ρ" },
  { title: "Node Mesh", body: "Interconnected adaptive nodes", glyph: "Ω" },
  { title: "Bandit Engines", body: "Exploration engines and bandits", glyph: "Σ" }
];

export function BrandAssetsSection() {
  return (
    <section id="brand" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerChildren}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal"
        >
          Brand System
        </motion.span>
        <motion.h2 variants={fadeInUp} className="section-title mt-4">
          ReinforceLab Identity
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-4 text-white/70">
          Minimal, classical Latin glyphs that express adaptive intelligence,
          guardrails, and simulation-first experimentation—pure typographic symbols.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {symbols.map((symbol) => (
          <motion.div
            key={symbol.title}
            variants={fadeInUp}
            className="glass-panel flex h-full flex-col gap-3 rounded-3xl p-5"
          >
            <div className="flex items-center justify-between">
              <div className="brand-symbol">
                {symbol.glyph}
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                Symbol
              </span>
            </div>
            <h3 className="font-display text-lg text-white">{symbol.title}</h3>
            <p className="text-sm text-white/60">{symbol.body}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-12 grid gap-6 lg:grid-cols-2"
      >
        <motion.div
          variants={fadeInUp}
          className="glass-panel flex h-full flex-col gap-3 rounded-3xl p-6"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">
            Wordmark
          </span>
          <div className="flex items-center gap-3">
            <div className="brand-symbol text-5xl">π</div>
            <span className="font-display text-2xl md:text-3xl text-white">
              ReinforceLab
            </span>
          </div>
          <p className="text-sm text-white/60">
            Primary identity: classical serif π with ReinforceLab wordmark.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="glass-panel flex h-full flex-col gap-3 rounded-3xl p-6"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/50">
            Secondary Wordmark
          </span>
          <div className="flex items-center gap-3">
            <div className="brand-symbol text-5xl">π</div>
            <span className="font-display text-2xl md:text-3xl text-white">
              ReinforceLab
            </span>
          </div>
          <p className="text-sm text-white/60">
            Monochrome serif treatment for print and compliant surfaces.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
