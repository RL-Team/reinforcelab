"use client";

import { useEffect } from "react";

const play = (
  el: Element | null,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions
) => {
  if (!el || typeof el.animate !== "function") return;
  el.animate(keyframes, options);
};

export function AnimeTouch() {
  useEffect(() => {
    const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
    const ctas = Array.from(document.querySelectorAll(".anime-btn"));
    const heroMetrics = Array.from(
      document.querySelectorAll(".hero-roller-track .metric-card")
    );

    const handleLinkEnter = (e: Event) => {
      play(e.currentTarget as Element, [{ transform: "scale(1)" }, { transform: "scale(1.06)" }], {
        duration: 180,
        easing: "ease-out",
        fill: "forwards"
      });
    };
    const handleLinkLeave = (e: Event) => {
      play(e.currentTarget as Element, [{ transform: "scale(1.06)" }, { transform: "scale(1)" }], {
        duration: 180,
        easing: "ease-out",
        fill: "forwards"
      });
    };

    const handleCtaClick = (e: Event) => {
      const el = e.currentTarget as Element;
      play(
        el,
        [
          { transform: "scale(1)" },
          { transform: "scale(0.96)" },
          { transform: "scale(1.02)" },
          { transform: "scale(1)" }
        ],
        { duration: 260, easing: "ease-in-out" }
      );
    };

    const handleMetricEnter = (e: Event) => {
      play(
        e.currentTarget as Element,
        [
          { transform: "translateY(0) scale(1)" },
          { transform: "translateY(-6px) scale(1.02)" }
        ],
        { duration: 220, easing: "ease-out", fill: "forwards" }
      );
    };
    const handleMetricLeave = (e: Event) => {
      play(
        e.currentTarget as Element,
        [
          { transform: "translateY(-6px) scale(1.02)" },
          { transform: "translateY(0) scale(1)" }
        ],
        { duration: 220, easing: "ease-out", fill: "forwards" }
      );
    };

    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkEnter);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    ctas.forEach((btn) => {
      btn.addEventListener("click", handleCtaClick);
    });

    heroMetrics.forEach((card) => {
      card.addEventListener("mouseenter", handleMetricEnter);
      card.addEventListener("mouseleave", handleMetricLeave);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkEnter);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
      ctas.forEach((btn) => {
        btn.removeEventListener("click", handleCtaClick);
      });
      heroMetrics.forEach((card) => {
        card.removeEventListener("mouseenter", handleMetricEnter);
        card.removeEventListener("mouseleave", handleMetricLeave);
      });
    };
  }, []);

  return null;
}
