import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sen)'],
        lora: ['var(--font-lora)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      width: {
        '7/10': '70%',
        '3/10': '30%',
      }
    },
  },
  plugins: [],
};
export default config;
