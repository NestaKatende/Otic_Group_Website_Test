/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandNavy: '#040458',
        brandNavySoft: '#0b0f7a',
        brandOrange: '#FAA51A',
        brandTeal: '#2dd4bf',
      },
    },
  },
  plugins: [],
};
