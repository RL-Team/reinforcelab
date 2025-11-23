import type { Metadata } from "next";
import "./globals.css";

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
      </body>
    </html>
  );
}
