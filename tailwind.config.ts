import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: "#1C4585",
        secondary: "#F9AE42",
        tertiary: "#212121",
        quaternary: "#ffffff",
        paragraph: "#D7D7D7",
        svg: "#868686"
      }
    }
  },

  plugins: [],
};
export default config;
