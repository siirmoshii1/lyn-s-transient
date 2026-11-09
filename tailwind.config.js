/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#0b1736',
          'navy-dark': '#070e22',
          'navy-light': '#152a5e',
          gold: '#d4b472',
          cream: '#fcfbf7',
        },
      },
    },
  },
  plugins: [],
}
