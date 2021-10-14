module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors : {
      indigo : '#994DD4',
      white : '#ffffff'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
