// --- Section: About & Vision ---
"use client";

import { fadeInUp, staggerChildren, viewportConfig } from "@/lib/motion";
import { motion } from "framer-motion";

export function AboutVisionSection() {
  return (
    <section id="about" className="anime-section section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerChildren}
        className="grid gap-10 lg:grid-cols-2"
      >
        <motion.div variants={fadeInUp} className="space-y-5">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--flat-lime)]">
            About ReinforceLab
          </span>
          <h2 className="section-title">
            Mission: Translate reward signals into durable, auditable, high-impact business value.
          </h2>
          <div className="title-underline" aria-hidden="true" />
          <p className="text-white/70">
            ReinforceLab bridges the gap between cutting-edge RL research and
            enterprise deployment. We align cross-functional teams around
            adaptive intelligence programs that deliver measurable results
            across strategy, simulation, policy deployment, and ongoing
            governance.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="glass-panel rounded-3xl p-6 text-sm text-white/70"
        >
          <p>
            Our teams combine RL scientists, systems engineers, and AgentOps
            specialists who design transparent, evolving, and regulation-ready
            adaptive systems. We build learning pipelines your teams can
            inherit, understand, and trust.
          </p>
          <p className="mt-4">
            Vision: Make continuous learning a scalable, managed capability for
            every enterprise—explainable, ethical, and economically aligned
            with every decision maker.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
