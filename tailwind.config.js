/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  corePlugins: {
    container: false
  },
  theme: {
    colors: {
      primary: '#FFC138',
      secondary: {
        50: '#e5eeff',
        100: '#d0e0ff',
        200: '#abc4ff',
        300: '#799cff',
        400: '#4562ff',
        500: '#1c2aff',
        600: '#0001ff',
        700: '#0004ff',
        800: '#0004dd',
        900: '#02024d'
      },
      accent: '#11E07D',
      'accent-dark': '#058547',
      surface: '#D9D9D9',
      black: colors.black,
      gray: colors.gray,
      white: colors.white
    }
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: { color: theme('colors.secondary.900') }
      });
    }),
    plugin(({ addComponents }) =>
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px'
          },
          '@screen md': {
            maxWidth: '768px'
          },
          '@screen lg': {
            maxWidth: '944px'
          },
          '@screen xl': {
            maxWidth: '1280px'
          }
        }
      })
    )
  ]
};
