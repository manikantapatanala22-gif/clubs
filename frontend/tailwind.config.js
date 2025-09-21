import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2b2b2b",
          secondary: "#5c6770", 
          accent: "#00b894",
          nav: "#2b2b2b",
          offwhite: "#f5f5f5",
          "offwhite-2": "#e8e8e8",
          "accent-light": "#2b9e5b",
        },
      },
    },
  },
  plugins: [typography],
  safelist: [
    {
      pattern: /(bg|text|border|hover:bg|hover:text|hover:border|focus:ring|focus:border)-(brand-primary|brand-secondary|brand-accent|brand-nav|brand-offwhite|brand-offwhite-2|brand-accent-light)/,
    },
  ],
};
