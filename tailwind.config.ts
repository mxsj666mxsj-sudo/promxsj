import type { Config } from "tailwindcss";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
      colors: {
        // 高级深色背景：不再是纯黑，而是带有微妙蓝调的深灰
        background: "#030711", // Very dark blue/gray
        surface: "#0f1629",    // Slightly lighter for cards
        
        // 文字层级
        foreground: "#f8fafc", // Slate-50
        muted: "#94a3b8",      // Slate-400
        
        // 品牌色：高级极光蓝
        primary: {
          DEFAULT: "#3b82f6", // Blue-500
          foreground: "#ffffff",
          glow: "#60a5fa",    // Blue-400
        },
        // 辅助色：流沙金（用于强调成就）
        secondary: {
          DEFAULT: "#eab308", // Yellow-500
          glow: "#fde047",    // Yellow-300
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({ ":root": newVars });
}

export default config;
