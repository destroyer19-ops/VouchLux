/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nexa', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.glassmorphic': {
          'backdrop-filter': 'blur(10px)',
          'background-color': 'rgba(255, 255, 255, 0.1)', // Light translucent background
          'border': '1px solid rgba(255, 255, 255, 0.2)', // Subtle light border
          'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow
          'border-radius': '12px', // Rounded corners for a modern look
        },
        '.glassmorphic-dark': {
          'backdrop-filter': 'blur(10px)',
          'background-color': 'rgba(0, 0, 0, 0.2)', // Dark translucent background
          'border': '1px solid rgba(255, 255, 255, 0.1)', // Subtle light border
          'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.2)', // Soft shadow
          'border-radius': '12px', // Rounded corners for a modern look
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
