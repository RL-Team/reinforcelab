// --- Section: Contact / Demo Request ---
"use client";

import { fadeInUp, staggerChildren, viewportConfig } from "@/lib/motion";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="anime-contact section-container">
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
          Contact
        </motion.span>
        <motion.h2 variants={fadeInUp} className="section-title mt-4">
          Request a Demo
        </motion.h2>
        <div className="title-underline" aria-hidden="true" />
        <motion.p variants={fadeInUp} className="mt-4 text-white/70">
          Share your use case and we&apos;ll map the reinforcement learning
          motion that accelerates results—from KPI design to production
          deployment.
        </motion.p>
      </motion.div>
      <motion.form
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-12 glass-panel mx-auto max-w-3xl space-y-6 rounded-3xl p-8 text-left"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <motion.label variants={fadeInUp} className="space-y-2 text-sm">
            <span className="text-white/70">Full Name</span>
            <input
              type="text"
              required
              placeholder="Alex Morgan"
              className="w-full rounded-2xl border border-white/10 bg-[var(--input-fill)] px-4 py-3 text-[var(--text-dark)] placeholder:text-[rgba(26,26,26,0.6)] focus:border-[var(--pale-yellow)] focus:outline-none"
            />
          </motion.label>
          <motion.label variants={fadeInUp} className="space-y-2 text-sm">
            <span className="text-white/70">Work Email</span>
            <input
              type="email"
              required
              placeholder="alex@enterprise.ai"
              className="w-full rounded-2xl border border-white/10 bg-[var(--input-fill)] px-4 py-3 text-[var(--text-dark)] placeholder:text-[rgba(26,26,26,0.6)] focus:border-[var(--pale-yellow)] focus:outline-none"
            />
          </motion.label>
        </div>
        <motion.label variants={fadeInUp} className="space-y-2 text-sm">
          <span className="text-white/70">Company</span>
          <input
            type="text"
            required
            placeholder="ReinforceLab"
            className="w-full rounded-2xl border border-white/10 bg-[var(--input-fill)] px-4 py-3 text-[var(--text-dark)] placeholder:text-[rgba(26,26,26,0.6)] focus:border-[var(--pale-yellow)] focus:outline-none"
          />
        </motion.label>
        <motion.label variants={fadeInUp} className="space-y-2 text-sm">
          <span className="text-white/70">Primary Objective</span>
          <select
            required
            className="w-full appearance-none rounded-2xl border border-white/10 bg-[var(--input-fill)] px-4 py-3 text-[var(--text-dark)] focus:border-[var(--pale-yellow)] focus:outline-none"
          >
            <option className="text-black">Adaptive pricing &amp; revenue</option>
            <option className="text-black">
              Operational optimization &amp; automation
            </option>
            <option className="text-black">
              Personalized engagement &amp; marketing
            </option>
            <option className="text-black">
              RL research partnership / co-development
            </option>
            <option className="text-black">Other (include details below)</option>
          </select>
        </motion.label>
        <motion.label variants={fadeInUp} className="space-y-2 text-sm">
          <span className="text-white/70">How can we help?</span>
          <textarea
            rows={4}
            placeholder="Tell us about your current AI strategy, data sources, and success metrics."
            className="w-full rounded-2xl border border-white/10 bg-[var(--input-fill)] px-4 py-3 text-[var(--text-dark)] placeholder:text-[rgba(26,26,26,0.6)] focus:border-[var(--pale-yellow)] focus:outline-none"
          />
        </motion.label>
        <motion.button
          variants={fadeInUp}
          type="submit"
          className="anime-btn w-full rounded-full px-6 py-3 text-sm font-semibold"
        >
          Submit Request
        </motion.button>
      </motion.form>
    </section>
  );
}
