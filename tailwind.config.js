/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    backgroundImage: {
      'hero': "url('/src/assets/hero.png')",
    },
    colors: {
      'black': '#000',
      'blue-dark': '#02044A',
      'brown': '#49200A',
      'gray-dark': '#494A7D',
      'gray-light': "#8687A8",
      'orange': '#FF7A00',
      'red': '#D43D3D',
      'white': '#fff',
      'yellow': '#FFEDC4',
    },
    fontFamily: {
      'narrow': 'PT Sans Narrow, bernier',
      'bernier': 'bernier, PT Sans Narro'
    },
    extend: {},
  },
  plugins: [],
})

