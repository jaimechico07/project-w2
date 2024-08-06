/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],

  theme: {
    extend: {
      height: {
        'calc-screen-playList': 'calc(100vh - 80px)',
        'calc-screen-song': 'calc(100vh - 150px)',
      },
      colors: {
        "brown-primary": "#E49084",
        "brown-secondary":"#845750",
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
        anton:["Anton SC", "sans-serif"],
        "DM-display": ["DM Serif Display", "serif"],
      },

      fontSize: {
        "dynamic-h1": "clamp(1.5rem, 1.4024rem + 0.4878vw, 2rem)",
        "dynamic-h2": "clamp(1rem, 0.9024rem + 0.4878vw, 1.5rem)",
        "dynamic-text": "clamp(0.75rem, 0.7012rem + 0.2439vw, 1rem)",
        "dynamic-detail-text":"clamp(2rem, -0.1136rem + 6.8182vw, 3.8rem)"
      },
      backgroundImage: {
        "fondo-image": "url('/assets/fondo.webp')",
        "fondo-cocina": "url('/assets/fondococina.webp')",
        "cheff-login": "url('/assets/concentrated-female-chef-garnishing-food-in-kitchen2.webp')",
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // add this line
  ],
};
