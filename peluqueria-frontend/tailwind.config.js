/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      fontWeight: {
        "ultra-light": 100,
      },
    },
  },
  plugins: [],
};
