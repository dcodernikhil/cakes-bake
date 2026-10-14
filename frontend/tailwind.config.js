
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D9A0A0",
        secondary: "#A9686B",
        background: "#F4EEE8",
        text: "#3B3231",
        accent: "#9B987B",
        border: "#D8C9C0",

        // Useful variations for component states
        "primary-hover": "#CC8D8D",
        "secondary-hover": "#92565A",
        "surface": "#FFFCF9",
        "muted": "#796F6B",
      },

      fontFamily: {
        display: ['"Berkshire Swash"', "cursive"],
        heading: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"Cormorant Garamond"', "Georgia", "serif"],
      },

      borderRadius: {
        bakery: "1rem",
      },

      boxShadow: {
        soft: "0 8px 30px rgba(59, 50, 49, 0.08)",
      },
    },
  },
  plugins: [],
};
