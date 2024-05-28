/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: "#066393",
        "blue-2": "#21BBCC",
        orange: "#E65327",
        "orange-2": "#FF8802",
        black: "#1B2124",
        "grey-1": "#8D9091",
        "grey-2": "#CCCCCC",
        "grey-3": "#EFEFEF",
        red: "#C5292A",
        green: "#22B02E",
        sunny: "#FFD965",
        marina: "#A6D4FF",
        cream: "#fbf9f2"
      },
    },
  },
  plugins: [],
};
