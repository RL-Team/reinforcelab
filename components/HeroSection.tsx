// --- Section: Hero ---
"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/lib/motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="section-container flex flex-col gap-12 pb-24 pt-16 lg:flex-row lg:items-center lg:gap-16 lg:pt-28"
    >
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-1/2"
      >
        <motion.span
          variants={fadeInUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70"
        >
          ReinforceLab
        </motion.span>
        <motion.h1
          variants={fadeInUp}
          className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl"
        >
          From Rewards to Reality — Reinforcement Learning That Scales.
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-2 text-lg font-semibold text-brand-teal"
        >
          Agentic Guardrails for every adaptive decision.
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg text-white/80"
        >
          ReinforceLab empowers enterprises with adaptive, goal-driven AI
          systems that continuously learn from interaction, feedback, and
          outcomes. We convert reward signals into tangible business impact
          across pricing, operations, logistics, and engagement programs.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="anime-btn rounded-full px-6 py-3 text-sm font-semibold"
          >
            Request a Demo
          </a>
          <a
            href="#services"
            className="anime-btn rounded-full border px-6 py-3 text-sm font-semibold"
          >
            Explore Services
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full lg:w-1/2"
      >
        <div className="glass-panel relative overflow-hidden rounded-3xl p-8 shadow-glow">
          <div className="absolute inset-0 bg-gradient-conic opacity-60" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
            className="pointer-events-none absolute -left-16 -top-16 h-60 w-60 rounded-full border border-brand-indigo/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 26, ease: "linear", repeat: Infinity }}
            className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full border border-brand-teal/25"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(40,208,200,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(57,69,255,0.16),transparent_32%),radial-gradient(circle_at_60%_70%,rgba(91,208,255,0.12),transparent_30%)] simulation-grid" />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between">
              <p className="font-display text-4xl text-white">8-12 mo</p>
              <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                ROI Realized
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl bg-white/5 p-4"
              >
                <p className="text-xs uppercase text-white/50">AgentOps</p>
                <p className="mt-2 text-lg font-semibold text-white">45+</p>
                <p>Adaptive monitors across deployments</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl bg-white/5 p-4"
              >
                <p className="text-xs uppercase text-white/50">
                  Agentic Guardrails
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Zero-Trust
                </p>
                <p>Alignment controls and runtime safety</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl bg-white/5 p-4"
              >
                <p className="text-xs uppercase text-white/50">Policy Library</p>
                <p className="mt-2 text-lg font-semibold text-white">120+</p>
                <p>Reusable RL templates</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl bg-white/5 p-4"
              >
                <p className="text-xs uppercase text-white/50">Impact</p>
                <p className="mt-2 text-lg font-semibold text-white">3x</p>
                <p>Average uplift across pricing and ops pilots</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
