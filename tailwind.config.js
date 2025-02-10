/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-black': '#171717', // Agrega tu color personalizado aquí
        'custom-claro':'#1B1B1B',
      },
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'], // Agrega tu fuente aquí
      },

    },
  },
  plugins: [],
};
