// --- Section: Navigation (Notched Navbar) ---
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="anime-header-notch">
      <div className="nav-notch">
        <div className="nav-left">
          <span className="nav-logo">
            <span className="brand-symbol nav-pi">π</span>
            <span className="nav-logo-text">ReinforceLab</span>
          </span>
        </div>

        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#research">Research</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-right">
          <button className="demo-btn hidden sm:inline-flex">Request a Demo</button>
          <button
            className="hamburger"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            ≡
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`mobile-drawer ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <div className="mobile-drawer__panel">
          <div className="flex items-center justify-between">
            <span className="nav-logo">
              <span className="brand-symbol nav-pi">π</span>
              <span className="nav-logo-text">ReinforceLab</span>
            </span>
            <button className="hamburger" aria-label="Close navigation" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
          <nav className="mobile-drawer__links">
            {[
              { label: "Services", href: "#services" },
              { label: "Solutions", href: "#solutions" },
              { label: "Research", href: "#research" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" }
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="mobile-drawer__link"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="anime-btn rounded-full px-4 py-3 text-sm font-semibold text-center w-full">
            Request a Demo
          </a>
        </div>
      </div>
    </header>
  );
}
