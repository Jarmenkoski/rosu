import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#E8F8F8",
          100: "#D1F1F2",
          200: "#A3E3E5",
          300: "#8DD3D6",
          400: "#5BBCBF",
          500: "#4AA8AB",
          600: "#3A8E91",
          700: "#2D7174",
          800: "#205457",
          900: "#143739",
        },
        navy: {
          400: "#2A4F7A",
          500: "#1E3A5F",
          600: "#1B2A4A",
          700: "#152238",
          800: "#101A2C",
          900: "#0B1220",
        },
        gray: {
          850: "#111127",
          900: "#0D0D1A",
          950: "#08080F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": [
          "3.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "heading-1": [
          "2.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        "heading-2": [
          "2rem",
          { lineHeight: "1.3", letterSpacing: "-0.01em" },
        ],
        "heading-3": ["1.5rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        body: ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, hsla(181, 44%, 55%, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(210, 52%, 24%, 0.12) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(181, 44%, 55%, 0.08) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(210, 52%, 24%, 0.08) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(181, 44%, 55%, 0.1) 0px, transparent 50%)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
