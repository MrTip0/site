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
    extend: {}
  },
  variants: {
    extend: {
      rotate: ['active', 'group-hover'],
    },
  },
  plugins: [],
}
