/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily:{
        'Rubik-Iso': ['Rubik Iso','cursive'],
        "Press-Start-2P" : ['Press Start 2P', 'cursive'],
        "Dancing-Script": ['Dancing Script', 'cursive'],
        "Caveat":['Caveat', 'cursive'],
        "Shadows-Into-Light":['Shadows Into Light', 'cursive'],
        "SFPRODISPLAYMEDIUM":["SFPRODISPLAYMEDIUM"]
      }
    },
  },
  plugins: [
    [require('@tailwindcss/forms')]
  ],
}