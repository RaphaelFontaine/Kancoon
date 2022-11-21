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
      'corps-color': '#474746',
      'grey-realisation': "#7A7A7A"
    },
    fontFamily: {
      police: 'Poppins'
    },
    fontSize: {
      'title-size': '2rem',
      'corps-size': '1rem',
      'realisation-title-size': '50px',
      'realisation-corps-size': '20px'
    },
    extend: {
      width: {
        'grey-band': '34px',
        'green-band': '34px'
      },
      height: {
        'case-size': '540px',
        'grey-band': '130px',
        'green-band': '100px',
        'carrousel-case': '576px'
      },
      padding: {
        'title-x': '96px',
        'title-y': '36px',
        'corps-right': '48px',
        'realisation-top': '10px',
        'realisation-bottom': '30px'
      },
      lineHeight: {
        'text': '30px'
      }
    },
  },
  plugins: [],
}
