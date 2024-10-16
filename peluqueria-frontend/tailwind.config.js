/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        dancing: ['"Dancing Script"', "cursive"],
        lora: ['"Lora"', "serif"],
        greatvibes: ['"Great Vibes"', "cursive"],
        alexbrush: ['"Alex Brush"', "cursive"],
      },
      fontWeight: {
        "ultra-light": 100,
      },
    },
  },
  plugins: [],
};
