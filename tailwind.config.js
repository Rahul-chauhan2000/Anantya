/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#0f3d2e",
          gold: "#d4af37",
          beige: "#f9f6f0",
          cream: "#fffcf7",
        },
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        lato: ["'Lato'", "sans-serif"],
      },
    },
  },
  plugins: [],
}

