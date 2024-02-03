import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        levitate: {
          "0%, 100%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(4px)" },
          "70%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        levitate: "levitate 10s ease infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
