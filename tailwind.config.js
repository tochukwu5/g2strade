/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A227',
          light: '#E8C14F',
          dark: '#A07D10',
        },
        teal: {
          brand: '#1A9B9B',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          card: '#111111',
          border: '#1E1E1E',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
