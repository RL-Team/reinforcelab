// --- Section: Navigation ---
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "@/content/data";

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-charcoal/70 backdrop-blur-xl">
      <div className="section-container flex items-center justify-between py-4">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <div className="brand-symbol text-5xl leading-none">π</div>
          <span className="font-display text-xl">ReinforceLab</span>
        </motion.div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ opacity: 1, y: -2 }}
              className="transition hover:text-white"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-full bg-brand-indigo px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-teal"
        >
          Request a Demo
        </Link>
      </div>
    </header>
  );
}
