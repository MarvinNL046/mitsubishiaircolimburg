/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(0,94,254)",
        "primary-dark": "rgb(0,75,203)",
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
}