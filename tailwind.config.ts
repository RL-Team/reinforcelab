import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0b1b33",
          indigo: "#3945ff",
          teal: "#28d0c8",
          sky: "#5bd0ff",
          charcoal: "#101820"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-sora)", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at top left, rgba(57,69,255,0.2), transparent 60%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, rgba(40,208,200,0.25), transparent 60%)"
      },
      boxShadow: {
        glow: "0px 20px 60px rgba(57, 69, 255, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
