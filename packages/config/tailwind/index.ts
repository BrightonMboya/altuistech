import type { Config } from "tailwindcss";

export default {
  content: [""],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter_400Regular", "sans-serif"],
      },
      colors: {
        blue: "#1960F2",
        primary1: "#FFF2EB",
        primary2: "#FFEFC6",
        primary3: "#E4EDFF",
        yellow: "#FFC73D",
        purple: "#8E3AFF",
        orange: "#FF8E51",
      },
    },
  },
  plugins: [],
} satisfies Config;
