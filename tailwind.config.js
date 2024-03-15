/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    container: {
      center:true,
      padding: '1rem'
    },
    extend: {
      padding:{
        'md': '56.25%',
        '1/3': '33.33333%',
        '2/3': '66.66667'
      },
      colors: {
        dark: {
          800: '#232326',
          700: '#323236',
          600: '#3b3b41'
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: 'rotate(-8deg)'},
          '50%': {transform: 'rotate(8deg)'},
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

