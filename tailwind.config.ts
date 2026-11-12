import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F3EC",
        cream: "#FBF9F4",
        ivory: "#FFFDF8",
        ink: "#1E1F1C",
        mute: "#5F5C55",
        soft: "#4A4841",
        line: "#E6E1D6",
        hair: "#C9C3B6",
        moss: "#3F6B4A",
        mossDeep: "#2F5238",
        mossSoft: "#D6E3C4",
        sand: "#EADFC8",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(40px,-30px) scale(1.08)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) rotate(1.5deg)" },
          "50%": { transform: "translateY(-14px) rotate(1deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulse: {
          "0%,100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.4)", opacity: "0.6" },
        },
        spin: { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        marquee: "marquee 34s linear infinite",
        pulse: "pulse 2.6s ease-in-out infinite",
        spin: "spin 24s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
