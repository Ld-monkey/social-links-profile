/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#141414',
        'dark-gray': '#1F1F1F',
        'neon-green': '#C4F82A',
        grey: '#333333',
      },
    },
  },
  plugins: [],
};
