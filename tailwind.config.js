/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
const { slate } = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "hsl(var(--outline-light))",
        dark: "hsl(var(--outline-dark))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          hover: "hsl(var(--primary-hover))",
          active: "hsl(var(--primary-active))",
        },
        fg: {
          300: "var(--fg-300)",
          200: "var(--fg-200)",
          DEFAULT: "var(--fg)",
        },
        white: "hsl(var(--white))",
        black: "hsl(var(--black))",
      },
      fontFamily: {
        primary: ["Ubuntu", ...fontFamily.sans],
        bangla: ["Hind Siliguri", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
