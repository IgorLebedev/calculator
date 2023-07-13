/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          dark: '#313131',
          light: '#9f9f9f'
        },
        mandarin: '#f69906'
      },
      fontFamily: {
        'san-francisco': ['san-francisco', 'sans-serif'],
      },
    },
  },
  plugins: [],
}