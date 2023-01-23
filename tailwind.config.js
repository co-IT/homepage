/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: '#FFC138',
      secondary: '#02024D',
      accent: '#11E07D',
      surface: '#D9D9D9',
      black: colors.black,
      gray: colors.gray,
      white: colors.white
    }
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: { color: theme('colors.secondary') }
      });
    })
  ]
};
