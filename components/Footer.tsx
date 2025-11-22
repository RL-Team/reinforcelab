// --- Section: Footer ---
"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="section-container flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              <Image
                src="/logo-mark.svg"
                alt="ReinforceLab logo"
                fill
                sizes="32px"
              />
            </div>
            <p className="font-display text-lg">ReinforceLab</p>
          </div>
          <p className="mt-3 text-xs text-white/50">
            Adaptive intelligence for every workflow. © {new Date().getFullYear()}.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-white/60">
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/api-docs" className="hover:text-white">
            API Docs
          </Link>
          <Link href="/careers" className="hover:text-white">
            Careers
          </Link>
          <a href="mailto:hello@reinforcelab.ai" className="hover:text-white">
            hello@reinforcelab.ai
          </a>
        </nav>
      </div>
    </footer>
  );
}
