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
        cream: "#F2EDE4",
        stone: "#A8967A",
        espresso: "#2C1E14",
        navy: "#1B2838",
        ash: "#4A4540",
        nile: "#5A6B48",
        cacao: "#6B5144",
        bordeaux: "#5C2D35",
        parch: "#FAF8F4",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
        "body-lg": ["17px", { lineHeight: "1.8" }],
        "body-md": ["15px", { lineHeight: "1.7" }],
        "label": ["12px", { lineHeight: "1.4", letterSpacing: "0.1em" }],
      },
      spacing: {
        section: "clamp(80px, 12vw, 160px)",
        "section-sm": "clamp(48px, 8vw, 100px)",
      },
      maxWidth: {
        content: "1200px",
        prose: "600px",
      },
      transitionDuration: {
        "800": "800ms",
        "500": "500ms",
      },
    },
  },
  plugins: [],
};
export default config;
