/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center:true,
      padding: '1rem'
    },
    extend: {
      padding:{
        'md': '56%'
      }
    },
  },
  plugins: [],
}

