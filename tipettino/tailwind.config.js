const colors = require("tailwindcss/colors")

module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.teal,
      secondary: colors.yellow,
      gray: colors.gray
    },
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Poppins', 'system-ui', 'sans-serif']
    },
    extend: {
      minWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%'
      },
      keyframes: {
        rspin:{
          '0%': {
            transform: 'rotate(0deg)'
          },
          '25%': {
            transform: 'rotate(-90deg)'
          },
          '50%': {
            transform: 'rotate(-180deg)'
          },
          '75%': {
            transform: 'rotate(-270deg)'
          },
          '100%': {
            transform: 'rotate(-360deg)'
          }
        }
      },
      animation: {
        'rspin-slow': 'rspin 3s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
    }
  },
  variants: {
    extend: {
      rotate: ['active', 'group-hover'],
      borderWidth: ['hover'],
      scale: ['group-hover']
    },
  },
  plugins: [],
}
