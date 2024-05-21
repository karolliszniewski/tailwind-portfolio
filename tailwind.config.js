/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#111111",
        secondary:{
          100:'#F4F4F4',
          200:'#52525295',
        },
        yellow:"#FFDD95"
      },
      fontFamily:{
        body:['Roboto']
      },
      spacing: {
        'up-.1rem': '.1rem',  // Dodajemy ujemną wartość spacingu
      },
    },
  },
  plugins: [],
}

