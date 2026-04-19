/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C9A96E",
        dark: "#0F0F0F",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};