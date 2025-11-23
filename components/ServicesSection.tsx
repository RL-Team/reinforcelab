// --- Section: Core Services ---
"use client";

import { services } from "@/content/data";
import { fadeInUp, staggerChildren, viewportConfig } from "@/lib/motion";
import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section id="services" className="section-container">
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
          Services
        </motion.span>
        <motion.h2 variants={fadeInUp} className="section-title mt-4">
          Reinforcement Learning, Delivered End-to-End
        </motion.h2>
        <div className="title-underline" aria-hidden="true" />
        <motion.p variants={fadeInUp} className="mt-4 text-white/70">
          Our six-part service suite spans strategy, simulation, policy
          engineering, deployment, operations, and governance—designed to move
          engagements from proof-of-value to production-grade impact.
        </motion.p>
      </motion.div>
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-16 grid gap-6 lg:grid-cols-3"
      >
        {services.map((service) => (
          <motion.article
            key={service.name}
            variants={fadeInUp}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-panel flex h-full flex-col rounded-3xl p-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-2xl bg-white/8 ring-1 ring-white/10" />
              <h3 className="font-display text-lg text-white">{service.name}</h3>
            </div>
            <p className="mt-4 text-sm text-white/70">{service.summary}</p>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {service.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-teal" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
