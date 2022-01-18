module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'title': ['Ubuntu']
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
