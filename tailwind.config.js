/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ft': '765px',
      'phone': '500px',
      'lg': '1024px',
      'bp': '930px',
    },
    colors: {
      'white': '#fff',
      'black': '#000',
      'transparent': '#fff0000',
      'dark-grey': '#474746',
      'green': '#ADC906',
      'light-grey': '#868688',
      'footer-grey': '#24262d',
      'mentions-grey': '#383b45',
      'title-color': '#54595F',
      'corps-color': '#37393e',
      'grey-realisation': '#7A7A7A',
      'general-grey': '#525252',
      'service-title': '#353858',
      'service-corps': '#7d7d7f'

    },
    fontFamily: {
      police: 'Poppins'
    },
    fontSize: {
      'title-size': 'calc(1.5vw + 7px)',
      'corps-size': 'calc(0.75vw + 7px)',
      'partenaire-size': 'calc(2.5vw + 8px)',
      'satisfaction-size': 'calc(2vw + 7px)',
      'client-size-titre': 'calc(1.5vw + 10px)',
      'client-size-texte': 'calc(1vw + 7px)',
      'realisation-title-size': '50px',
      'realisation-corps-size': '20px',
      'footer-title': 'calc(1vw + 7px)',
      'footer-corps': 'calc(0.7vw + 5px)',
      'home-carroussel-title': 'calc(2.5vw + 15px)',
      'home-carroussel-button': 'calc(1vw + 5px)',
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
