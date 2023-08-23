/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const content = ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      orbitron: ["var(--font-orbitron)", "sans-serif"],
      sans: ["var(--font-exo2)", "sans-serif"],
    },
  },
};
export const plugins = [require("@tailwindcss/typography")];
