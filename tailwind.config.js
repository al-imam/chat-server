/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#6169ff33",
        dark: "#bac9ff",
      },
    },
  },
  plugins: [],
};
