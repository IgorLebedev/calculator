/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '4.5xl': '44px',
      },
      colors: {
        grey: {
          dark: '#313131',
          light: '#a5a5a5',
          darkHover: '#737373',
          lightHover: '#d9d9d9',
        },
        mandarin: {
          common: '#f69906',
          hover: '#fbc78e', 
        } 
      },
      fontFamily: {
        'san-francisco': ['san-francisco', 'sans-serif'],
      },
    },
  },
  plugins: [],
}