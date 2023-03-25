/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#6169ff33",
        dark: "#bac9ff",
      },
      fontFamily: {
        primary: ["Ubuntu", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
