/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0D1B3E',
        'navy-panel': '#0A1531',
        card: '#13244E',
        'card-hover': '#1A2E5C',
        paper: '#F1EDE4',
        cyan: '#2E8FC9',
        teal: '#17B597',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
