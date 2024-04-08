/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          1000: 'rgb(11, 45, 131)'
        },
      }
    },
  },
  plugins: [],
}