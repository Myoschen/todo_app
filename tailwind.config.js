module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'pacifico': 'Pacifico',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
