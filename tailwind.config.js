/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#6169ff33",
        dark: "#bac9ff",
        my: {
          primary: "hsl(341deg 66% 67%)",
          hover: "hsl(341deg 66% 60%)",
          active: "hsl(335deg 51% 33%)",
        },
      },
      fontFamily: {
        primary: ["Ubuntu", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
