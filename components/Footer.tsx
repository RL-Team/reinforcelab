// --- Section: Footer ---
"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="anime-footer">
      <div className="section-container flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between text-[var(--text-dark)]">
        <div>
          <div className="flex items-center gap-3">
            <div className="brand-symbol text-4xl leading-none">π</div>
            <p className="font-display text-lg text-[var(--text-dark)]">ReinforceLab</p>
          </div>
          <p className="mt-3 text-xs text-[var(--text-dark)]">
            Adaptive intelligence for every workflow. © {new Date().getFullYear()}.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-[var(--text-dark)]">
          <Link href="/privacy">
            Privacy
          </Link>
          <Link href="/api-docs">
            API Docs
          </Link>
          <Link href="/careers">
            Careers
          </Link>
          <a href="mailto:hello@reinforcelab.ai">
            hello@reinforcelab.ai
          </a>
        </nav>
      </div>
    </footer>
  );
}
