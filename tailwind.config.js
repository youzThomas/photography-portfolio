/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ovo: ['Instrument Serif', 'Georgia', 'serif'],
        quattro: ['Geist', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
