import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#000000",
        secondary: "#191C1F",
        third: "#303639",
        light_yellow: "#F0CC0E",
        btn_normal: "#2E2F3A",
        btn_hover: "#181D2D",
        btn_active: "#F0CC0E",
        dialog: "#555555",
        slider_normal: "#C1C1C1",
        slider_active: "#F0CC0E",
        profile_nav: "#18181C",
      },
      textColor: {
        primary: "#ffffff",
        secondary: "#77878F",
        third: "#EBC80C",
        fourth: "#C9C9C9",
        lightred: "#FF7070",
        lightgreen: "#8DFFA6",
        btn_reset: "#C1C1C1",
        btn_latest: "#F0CC0E",
      },
      borderColor: {
        primary: "#303639",
        secondary: "#FCFF62",
        third: "#818181",
        profile_nav: "#18181C",
      },
    },
  },
  plugins: [],
};
export default config;
