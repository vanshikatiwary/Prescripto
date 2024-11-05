/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#5f6FFF"

      },
      gridTemplateColumns:{
        '5-cols': 'repeat(5, minmax(200px, 1fr))',
      }
    },
  },
  plugins: [],
}