// --- Section: Brand Assets ---
"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerChildren, viewportConfig } from "@/lib/motion";
import { BrandMark } from "@/components/BrandMark";

const marks = [
  {
    title: "Adaptive Loop",
    description: "Interlocking loops for continuous state → action → reward → update.",
    src: "assets/brand/adaptive-loop.svg"
  },
  {
    title: "Guardrail Shield",
    description: "Shield with layered arcs and policy nodes for agentic guardrails.",
    src: "assets/brand/guardrail-shield.svg"
  },
  {
    title: "Policy Graph",
    description: "Node constellation with directed edges converging on reward.",
    src: "assets/brand/policy-graph.svg"
  },
  {
    title: "Simulation Grid",
    description: "Warped grid showing controlled exploration in safe bounds.",
    src: "assets/brand/simulation-grid.svg"
  }
];

const wordmarks = [
  {
    title: "Primary Wordmark",
    body: "Electric Indigo + Teal Emerald, geometric sans with calm tracking."
  },
  {
    title: "Secondary Wordmark",
    body: "Neutral Silver on Deep Slate with Signal Amber underline on “Lab.”"
  }
];

const backgrounds = [
  {
    title: "Node Mesh",
    body: "Sparse triangulated mesh with a single reward pulse.",
    src: "assets/brand/node-mesh.svg"
  },
  {
    title: "Reward Curves",
    body: "Bezier reward lines threading a subtle gridfield.",
    src: "assets/brand/reward-curves.svg"
  }
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
          Futuristic, mathematically precise marks that express adaptive loops,
          guardrails, and simulation-first experimentation—ready for light and
          dark applications.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {marks.map((mark) => (
          <motion.div
            key={mark.title}
            variants={fadeInUp}
            className="glass-panel flex h-full flex-col gap-3 rounded-3xl p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                <img
                  src={mark.src}
                  alt={`${mark.title} logomark`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                Mark
              </span>
            </div>
            <h3 className="font-display text-lg text-white">{mark.title}</h3>
            <p className="text-sm text-white/60">{mark.description}</p>
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
        {wordmarks.map((w) => (
          <motion.div
            key={w.title}
            variants={fadeInUp}
            className="glass-panel flex h-full flex-col gap-3 rounded-3xl p-6"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">
              Wordmark
            </span>
            <div className="flex items-center gap-2">
              <BrandMark className="h-8 w-8" />
              <span className="font-display text-2xl md:text-3xl text-white">
                ReinforceLab
              </span>
            </div>
            <p className="text-sm text-white/60">{w.body}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-12 grid gap-6 md:grid-cols-2"
      >
        {backgrounds.map((bg) => (
          <motion.div
            key={bg.title}
            variants={fadeInUp}
            className="glass-panel relative overflow-hidden rounded-3xl p-6"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                Background
              </span>
              <h3 className="font-display text-lg text-white">{bg.title}</h3>
              <p className="text-sm text-white/70">{bg.body}</p>
              <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img
                  src={bg.src}
                  alt={`${bg.title} pattern`}
                  className="h-32 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
