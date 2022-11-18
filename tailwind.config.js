/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#fff',
      'black': '#000',
      'dark-grey': '#474746',
      'green': '#ADC906',
      'light-grey': '#868688',
      'footer-grey': '#24262d',
      'title-color': '#54595F',
      'corps-color': '#474746'
    },
    fontFamily: {
      police: 'Poppins'
    },
    fontSize: {
      'title-size': '2rem',
      'corps-size': '1rem',
    },
    extend: {
      width: {
        'grey-band': '34px',
        'green-band': '34px'
      },
      height: {
        'grey-band': '130px',
        'green-band': '100px'
      }
    },
  },
  plugins: [],
}
