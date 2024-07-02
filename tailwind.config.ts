import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    ...defaultTheme,
    fontFamily: {
      sans: ["Arial", "sans-serif"],
    },
    variants: {
      extend: {
        opacity: ["disabled"],
        backgroundColor: ["disabled"],
        cursor: ["disabled"],
      },
    },
    extend: {
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "80%": { transform: "rotate(0deg)" },
          "85%": { transform: "rotate(20deg)" },
          "95%": { transform: "rotate(-20deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s linear infinite",
      },
      backgroundImage: {
        "sprite-indexIcons": "url('~@/public/assets/images/indexIcons.png')",
        "pc-not-found":
          "url('~@/public/assets/images/customerSupport/pc-not-found.png')",
        "mobile-not-found":
          "url('~@/public/assets/images/customerSupport/mobile-not-found.png')",
        "pc-maintenance":
          "url('~@/public/assets/images/customerSupport/pc-maintenance.png')",
        "mobile-maintenance":
          "url('~@/public/assets/images/customerSupport/mobile-maintenance.png')",
        "qr-bg": "url('~@/public/assets/images/qr-border-bg.svg')",
        "transfer-info": "url('~@/public/assets/images/transfer-bg.svg')",
      },
      lineHeight: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
      },
    },
    screens: {
      md: "768px",
      "4xl": "1920px",
    },
    keyframes: () => ({
      jackpot: {
        "0%": { top: "0" },
        "38%": { top: "0" },
        "50%": { top: "-100%" },
        "88%": { top: "-100%" },
        "100%": { top: "0" },
      },
    }),
    animation: {
      jackpot: "jackpot 13s linear infinite",
    },
    colors: {
      white: "#FFFFFF",
      rhino: "#2D455F",
      transparent: "transparent",
      primary: "#32ABFF",
      darkTransparent: {
        30: "var(--color-dark-transparent-30)",
        70: "var(--color-dark-transparent-70)",
      },
      lightTransparent: {
        30: "var(--color-light-transparent-30)",
        70: "var(--color-light-transparent-70)",
        95: "var(--color-light-transparent-95)",
      },
      skyblue: {
        300: "var(--color-skyblue-300)",
        200: "var(--color-skyblue-200)",
        150: "var(--color-skyblue-150)",
        100: "var(--color-skyblue-100)",
      },
      pink: {
        400: "var(--color-pink-400)",
        300: "var(--color-pink-300)",
        200: "var(--color-pink-200)",
        100: "var(--color-pink-100)",
      },
      neutral: {
        950: "var(--color-neutral-950)",
        900: "var(--color-neutral-900)",
        800: "var(--color-neutral-800)",
        700: "var(--color-neutral-700)",
        600: "var(--color-neutral-600)",
        500: "var(--color-neutral-500)",
        400: "var(--color-neutral-400)",
        300: "var(--color-neutral-300)",
        200: "var(--color-neutral-200)",
        100: "var(--color-neutral-100)",
        50: "var(--color-neutral-50)",
        10: "var(--color-neutral-10)",
      },
      neutralTransparent: {
        10: "var(--color-neutral-transparent-10)",
        900: "var(--color-neutral-transparent-900)",
      },
      blue: {
        900: "var(--color-blue-900)",
        860: "var(--color-blue-860)",
        840: "var(--color-blue-840)",
        800: "var(--color-blue-800)",
        750: "var(--color-blue-750)",
        700: "var(--color-blue-700)",
        600: "var(--color-blue-600)",
        500: "var(--color-blue-500)",
        450: "var(--color-blue-450)",
        400: "var(--color-blue-400)",
        300: "var(--color-blue-300)",
        200: "var(--color-blue-200)",
        100: "var(--color-blue-100)",
        50: "var(--color-blue-50)",
        30: "var(--color-blue-30)",
        20: "var(--color-blue-20)",
        10: "var(--color-blue-10)",
      },
      orange: {
        600: "var(--color-orange-600)",
        500: "var(--color-orange-500)",
        400: "var(--color-orange-400)",
        300: "var(--color-orange-300)",
        200: "var(--color-orange-200)",
        100: "var(--color-orange-100)",
        50: "var(--color-orange-50)",
        10: "var(--color-orange-10)",
      },
      jadeGreen: {
        50: "var(--color-jade-green-50)",
        30: "var(--color-jade-green-30)",
        10: "var(--color-jade-green-10)",
      },
      purple: {
        50: "var(--color-purple-50)",
        10: "var(--color-purple-10)",
      },
      green: {
        200: "var(--color-green-200)",
        100: "var(--color-green-100)",
        50: "var(--color-green-50)",
        10: "var(--color-green-10)",
      },
      red: {
        500: "var(--color-red-500)",
        400: "var(--color-red-400)",
        300: "var(--color-red-300)",
        200: "var(--color-red-200)",
        100: "var(--color-red-100)",
        90: "var(--color-red-90)",
        80: "var(--color-red-80)",
        60: "var(--color-red-60)",
        50: "var(--color-red-50)",
        10: "var(--color-red-10)",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
export default config;
