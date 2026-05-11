import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#050505", soft: "#0a0a0a", card: "#0f0f10" },
        ink: { DEFAULT: "#e5e7eb", dim: "#a1a1aa", dimmer: "#6b7280" },
        border: { DEFAULT: "#1f1f1f", soft: "#161616", hard: "#2a2a2a" },
        accent: { DEFAULT: "#10b981", soft: "#34d399", deep: "#059669" },
        electric: { DEFAULT: "#6366f1", soft: "#818cf8" },
        rose: { 500: "#ec4899" },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: { tightest: "-0.04em" },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        blob: "blob 18s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
      },
      keyframes: {
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-50px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
      },
      boxShadow: {
        glow: "0 0 80px rgba(16, 185, 129, 0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
