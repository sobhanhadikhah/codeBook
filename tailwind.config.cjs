/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily:{
        'Rubik-Iso': ['Rubik Iso','cursive'],
        "Press-Start-2P" : ['Press Start 2P', 'cursive']
      }
    },
  },
  plugins: [],
}