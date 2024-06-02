/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],

  theme: {
    extend: {
      colors: {
        "brown-primary": "#E49084",
        "green-primary": "#7EAF94",
        "yellow-primary": "#DEAF5F",
        "blue-primary": "#2D467A",
        "pink-primary": "#FCADAA",
        "beach-primary": "#FEDFCE",
        "cream-primary": "#E6D7CA",
      },
      fontFamily: {
        "fugaz-one": ["Fugaz One", "sans-serif"],
        comfortaa: ["Comfortaa", "sans-serif"],
      },

      fontSize: {
        "dynamic-h1": "clamp(1.5rem, 1.4024rem + 0.4878vw, 2rem)",
        "dynamic-h2": "clamp(1rem, 0.9024rem + 0.4878vw, 1.5rem)",
        "dynamic-text": "clamp(0.75rem, 0.7012rem + 0.2439vw, 1rem)",
      },
      backgroundImage: {
        "fondo-image": "url('/src/assets/fondo.webp')",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // add this line
  ],
};
