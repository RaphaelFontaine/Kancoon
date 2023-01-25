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
      'green-2': '#e3f59d',
      'light-grey': '#868688',
      'footer-grey': '#24262d',
      'mentions-grey': '#383b45',
      'title-color': '#54595F',
      'corps-color': '#37393e',
      'grey-realisation': '#7A7A7A',
      'general-grey': '#525252',
      'service-title': '#353858',
      'service-corps': '#7d7d7f',
      'facebook': '#3b5998',
      'youtube': '#cd201f',
      'linkedin': '#0077b5',
      'instagram': '#262626',

    },
    fontFamily: {
      police: 'Poppins'
    },
    fontSize: {
      'title-size': 'calc(1.5vw + 8px)',
      'corps-size': 'calc(0.75vw + 8px)',
      'partenaire-size': 'calc(2.5vw + 8px)',
      'satisfaction-size': 'calc(2vw + 7px)',
      'client-size-titre': 'calc(1.5vw + 10px)',
      'client-size-texte': 'calc(1vw + 8px)',
      'realisation-title-size': '50px',
      'realisation-corps-size': '20px',
      'footer-title': 'calc(1vw + 8px)',
      'footer-corps': 'calc(0.7vw + 7px)',
      'satisfaction': 'calc(0.7vw + 5px)',
      'home-carroussel-title': 'calc(2.5vw + 15px)',
      'home-carroussel-button': 'calc(1vw + 5px)',
    },
    variants: {
      animation: ["motion-safe"]
    },
    extend: {
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0.5', transform: 'translateY(-200px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0.5', transform: 'translateX(-200px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInLeftHome: {
          '0%': { opacity: '0', transform: 'translateX(-200px)' },
          '10%': { opacity: '1', transform: 'translateX(-180px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0.5', transform: 'translateX(+200px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRightHome: {
          '0%': { opacity: '0', transform: 'translateX(+200px)' },
          '10%': { opacity: '1', transform: 'translateX(+180px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'},
        },
        ZoomIn: {
          '0%': { transform: 'scale(1.0)'},
          '100%': { transform: 'scale(1.1)'},
        }
      },
      animation: {
        'fadeInDown': 'fadeInDown 2s linear',
        'fadeInDownBand': 'fadeInDown 2s linear 2s ',
        'fadeInLeft': 'fadeInLeft 2s linear ',
        'fadeInLeftHome': 'fadeInLeftHome 0.5s linear 0.3s ',
        'fadeInLeftHomeButton': 'fadeInLeftHome 0.5s linear 1s ',
        'fadeInRight': 'fadeInRight 2s linear ',
        'fadeInRightHome': 'fadeInRightHome 0.5s linear ',
        'fadeInRightHomeButton': 'fadeInRightHome 0.5s linear 1s',
        'fadeIn': 'fadeIn 2s linear ',
        'ZoomIn': 'ZoomIn 5s linear',
      },
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
