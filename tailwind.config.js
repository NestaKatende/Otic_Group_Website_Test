/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandNavy: '#040458',
        brandOrange: '#FAA51A',
      },
    },
  },
  plugins: [],
};
