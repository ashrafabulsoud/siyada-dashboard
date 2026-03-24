/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#071320',
          800: '#0B1929',
          700: '#0F2236',
          600: '#152D47',
        },
        gold: {
          400: '#E8C070',
          500: '#D4A853',
          600: '#B8882F',
        },
        slate: {
          dashboard: '#8B9DB5',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    }
  },
  plugins: [],
}
