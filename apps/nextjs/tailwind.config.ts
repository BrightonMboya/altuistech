// import type { Config } from "tailwindcss";

import baseConfig from "@repo/tailwind-config";

// export default {
//   content: ["./src/**/*.tsx"],
//   presets: [baseConfig],
// } satisfies Config;
const { fontFamily } =
  // eslint-disable-next-line
  require("tailwindcss/defaultTheme") as typeof import("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "src/**/*.{ts,tsx}",
    "../../packages/{ui,monaco}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {},

      fontFamily: {
        cash: ["var(--font-cash)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};
