/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Solway: ["Solway", "serif"],
      Open_Sans: ["Open Sans", "sans-serif"],
      Glacial_Indifference: ["Glacial Indifference", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      main_blue: "#0085FF",
      black: "#000000",
      light_black: "#455154",
      deep_blue: "#111F5F",
      light_green: "#1ED760",
      red: "#FF003C",
      grey: "#C4C4C4",
      deep_grey: "#5C5C5C",
      white: "#FFFFFF",
      purple: "#4A314D",
    },
  },
  plugins: [],
};
