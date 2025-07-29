/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Oranje - Call-to-Action & Accenten
        orange: {
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
        },
        // Blauw - Merkkleuren
        blue: {
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E3A8A",
          900: "#1E3A8A",
        },
        // Grijs - Tekst & Achtergronden
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          300: "#D1D5DB",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        // Primaire kleuren voor backwards compatibility
        primary: {
          light: "#EA580C",  // orange-600
          DEFAULT: "#F97316", // orange-500
          dark: "#C2410C",    // orange-700
        }
      },
      fontSize: {
        // Mobile → Desktop
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '4xl': ['2.25rem', { lineHeight: '1.1' }],
        '3xl': ['1.875rem', { lineHeight: '1.1' }],
        '2xl': ['1.5rem', { lineHeight: '1.2' }],
        'xl': ['1.25rem', { lineHeight: '1.3' }],
        'lg': ['1.125rem', { lineHeight: '1.4' }],
        'base': ['1rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      fontFamily: {
        'sans': ['Poppins', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
}