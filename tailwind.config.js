/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#6169ff33",
        light: "#809dff",
      },
    },
  },
  plugins: [],
};
