/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#44FF9B',
          light: '#6affbf',
        },
        secondary: {
          DEFAULT: '#FF9B5F',
          light: '#ffab80',
        },
      },
    },
  },
  plugins: [],
};
