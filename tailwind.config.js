/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#1A1A1A',
        'gold': '#D4AF37',
        'ivory': '#F9F9F9',
        'midnight-blue': '#0B1A2D',
      },
      fontFamily: {
        nexa: ['Nexa', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
