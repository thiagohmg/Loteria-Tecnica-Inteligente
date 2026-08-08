/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        navy: {
          950: "#050E1F",
          900: "#0B1F3A",
          800: "#153A66",
          700: "#1E4A80",
          600: "#2E6AB0",
        },
        gold: {
          300: "#FFE575",
          400: "#FFD93D",
          500: "#FFD700",
          600: "#F5A623",
          700: "#C78B15",
          800: "#8A5F0E",
        },
        emerald: {
          500: "#10B981",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"Space Grotesk"', "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #FFD700 0%, #F5A623 100%)",
        "gold-gradient-soft":
          "linear-gradient(135deg, rgba(255,215,0,0.15) 0%, rgba(245,166,35,0.15) 100%)",
        "navy-gradient":
          "linear-gradient(180deg, #050E1F 0%, #0B1F3A 40%, #153A66 100%)",
        "hero-gradient":
          "radial-gradient(ellipse at top right, rgba(255,215,0,0.18) 0%, transparent 50%), radial-gradient(ellipse at bottom left, rgba(30,74,128,0.5) 0%, transparent 60%), linear-gradient(180deg, #050E1F 0%, #0B1F3A 100%)",
        "shine":
          "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.35) 50%, transparent 75%)",
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(255, 215, 0, 0.35)",
        "gold-glow-lg": "0 0 60px rgba(255, 215, 0, 0.30)",
        "card": "0 10px 40px -10px rgba(0,0,0,0.5)",
        "card-hover": "0 20px 60px -15px rgba(0,0,0,0.7)",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        shine: "shine 2.5s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
    },
  },
  plugins: [],
};
