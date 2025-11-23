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
      <body className="anime-body anime-ui text-white selection:bg-[var(--flat-yellow)] selection:text-[var(--charcoal)]">
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" strategy="afterInteractive" />
        <Script id="anime-effects" strategy="afterInteractive">{`
          const run = (fn) => typeof anime !== "undefined" && fn();

          run(() => {
            anime({
              targets: '.anime-card',
              translateY: ['0px', '-3px', '0px'],
              duration: 5500,
              easing: 'easeInOutSine',
              loop: true
            });

            anime({
              targets: '.tech-grid',
              backgroundPositionX: ['0%', '100%'],
              duration: 30000,
              easing: 'linear',
              loop: true
            });

            anime({
              targets: '.hero-roller-track',
              translateX: ['0%', '-50%'],
              duration: 20000,
              easing: 'linear',
              loop: true
            });

            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  const underline = entry.target.querySelector('.title-underline');
                  if (underline) {
                    anime({
                      targets: underline,
                      width: ['0%', '100%'],
                      duration: 900,
                      easing: 'easeOutQuad'
                    });
                  }
                }
              });
            }, { threshold: 0.35 });

            document.querySelectorAll('.anime-section').forEach((section) => observer.observe(section));

            document.querySelectorAll('.anime-btn').forEach((btn) => {
              btn.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                const rect = btn.getBoundingClientRect();
                ripple.style.left = \`\${e.clientX - rect.left}px\`;
                ripple.style.top = \`\${e.clientY - rect.top}px\`;
                btn.appendChild(ripple);
                anime({
                  targets: ripple,
                  scale: [0, 1.2],
                  opacity: [0.4, 0],
                  duration: 500,
                  easing: 'easeOutQuad',
                  complete: () => ripple.remove()
                });
              });
            });
          });
        `}</Script>
      </body>
    </html>
  );
}
