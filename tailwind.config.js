/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['poppins','sans-serif']
      },
      colors: {
        primary: '#171717',
        secondary: '#B3232E',
        tertiary: '#efefef',
        onprimary: '#231F20',
        onsecondary: '#172121',
        ontertiary: '#33312E',
      }
    },
  },
  plugins: [],
}

