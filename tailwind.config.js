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
      'footer-grey': '#24262d'
    },
    fontFamily: {
      police: 'Poppins'
    },
    extend: {},
  },
  plugins: [],
}
