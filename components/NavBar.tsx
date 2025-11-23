// --- Section: Navigation (Notched Navbar) ---
"use client";

import Link from "next/link";

export function NavBar() {
  return (
    <header className="anime-header-notch">
      <div className="nav-notch">
        <div className="nav-left">
          <span className="nav-logo">π ReinforceLab</span>
        </div>

        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#research">Research</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-right">
          <button className="demo-btn">Request a Demo</button>
          <button className="hamburger" aria-label="Open navigation menu">≡</button>
        </div>
      </div>
    </header>
  );
}
