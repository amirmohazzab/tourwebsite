/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center:true,
      padding: '1rem'
    },
    extend: {
      padding:{
        'md': '56.25%'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

