/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "rgb(237,46,56)",  // Lighter shade of Mitsubishi red
          DEFAULT: "rgb(226,0,19)", // Mitsubishi brand red
          dark: "rgb(181,0,15)",    // Darker shade
        }
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
}