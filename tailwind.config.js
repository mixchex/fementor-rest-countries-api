/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,tsx}"],
  purge: {
    safelist: [
      /w-^/,
      'w-48',
      /h-^/,
      /bg-^/,
    ]
  },
  theme: {
    screens: {
      xs: '400px',
      sm: '500px',
      md: '728px',
      lg: '984px',
      xl: '1240px',
      '2xl': '1496px',
    },
    container: {
      screens: {
        xxs: '340px',
        xs: '380px',
        sm: '582px',
        md: '728px',
        lg: '728px',
        xl: '1096px',
        '2xl': '1456px',
      
      }
    },
    colors: {
      blue: {
        700: '#2B3238',
        800: '#20262B',
        900: '#111314'
      },
      gray: {
        100: '#FAFAFA',
        700: '#858585'
      },
      white: '#FFFFFF'
    },
    fontFamily: {
      'sans': ['Nunito Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
