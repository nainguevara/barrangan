module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "Roboto": ["Roboto"]
      },
      colors: {
        "green-main": "#054439",
        "yellow-main":"#F0DF73"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
