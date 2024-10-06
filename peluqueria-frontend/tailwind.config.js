/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'], // Ya está añadida
        dancing: ['"Dancing Script"', 'cursive'],  // Añade Dancing Script
        lora: ['"Lora"', 'serif'],                // Añade Lora
        greatvibes: ['"Great Vibes"', 'cursive'],  // Añade Great Vibes
        alexbrush: ['"Alex Brush"', 'cursive'],    // Añade Alex Brush
      },
    },
  },
  plugins: [],
}

