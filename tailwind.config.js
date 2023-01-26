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
        '2xl': '1452px',
      
      }
    },
    colors: {
      red: {
        200: '#e7caca',
        800: '#4a2121'
      },
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
    extend: {
      keyframes: {
        'movein': {
          '0%': { transform: 'translateY(200%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'moveout': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(200%)' },
        },
      },
      animation: {
        'move-in': 'moveIn 0.5s ease-in',
        'move-out': 'moveOut 0.3s ease-out'
      }
    },
  },
  plugins: [],
}
