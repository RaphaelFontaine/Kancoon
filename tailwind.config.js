/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'lg': '1024px',
      'bp': '930px',
    },
    colors: {
      'white': '#fff',
      'black': '#000',
      'dark-grey': '#474746',
      'green': '#ADC906',
      'light-grey': '#868688',
      'footer-grey': '#24262d',
      'title-color': '#54595F',
      'corps-color': '#37393e',
      'grey-realisation': "#7A7A7A"
    },
    fontFamily: {
      police: 'Poppins'
    },
    fontSize: {
      'title-size': 'calc(1.5vw + 7px)',
      'corps-size': 'calc(0.75vw + 7px)',
      'realisation-title-size': '50px',
      'realisation-corps-size': '20px'
    },
    extend: {
      width: {
        'grey-band': 'calc(1.5vw + 7.5px)',
        'green-band': 'calc(1.5vw + 7.5px)'
      },
      height: {
        'case-size': '540px',
        'grey-band': 'calc(8vw + 25px)',
        'green-band': 'calc(5vw + 25px)',
        'carrousel-case': '576px'
      },
      padding: {
        'title-x': '96px',
        'title-y': '36px',
        'corps-right': '48px',
        'realisation-top': '10px',
        'realisation-bottom': '30px',
        'band-between': 'calc(1vw + 3px)',
        'band-left': 'calc(2vw + 10px)',

      },
      lineHeight: {
        'max-text': '28px',
        'text': '25px',
        'phone-text': '20px',
      }
    },
  },
  plugins: [],
}
