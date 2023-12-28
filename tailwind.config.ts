import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#aa66ff",
        secondary: "#c2f177",
        light: "#b4d0bf",
        tertiary: "#895e19",
        warning: "#7b9362",
        cool: "#476c43",
      },
    },
  },
  plugins: [],
};
export default config;
