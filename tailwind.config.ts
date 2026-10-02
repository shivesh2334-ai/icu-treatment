import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clinical: {
          50: "#f0f7f7",
          100: "#d9ebea",
          600: "#0f5c5b",
          700: "#0b4746",
          900: "#072e2d",
        },
      },
    },
  },
  plugins: [],
};
export default config;
