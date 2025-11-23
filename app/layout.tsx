import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ReinforceLab | Reinforcement Learning That Scales",
  description:
    "ReinforceLab builds enterprise-grade reinforcement learning systems, delivering adaptive intelligence from strategy to deployment."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="anime-body">
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" strategy="afterInteractive" />
        <Script id="navbar-anime" strategy="afterInteractive">{`
          const safe = (fn) => typeof anime !== 'undefined' && fn();
          safe(() => {
            anime({
              targets: '.nav-notch',
              translateY: [-40, 0],
              opacity: [0, 1],
              duration: 900,
              easing: 'easeOutQuad'
            });
            document.querySelectorAll('.nav-links a').forEach((link) => {
              link.addEventListener('mouseenter', () => {
                anime({ targets: link, scale: 1.04, duration: 200, easing: 'easeOutQuad' });
              });
              link.addEventListener('mouseleave', () => {
                anime({ targets: link, scale: 1, duration: 200, easing: 'easeOutQuad' });
              });
            });
            const demo = document.querySelector('.demo-btn');
            if (demo) {
              demo.addEventListener('click', () => {
                anime({ targets: '.demo-btn', scale: [1, 0.95, 1], duration: 220, easing: 'easeInOutSine' });
              });
            }
          });
        `}</Script>
      </body>
    </html>
  );
}
