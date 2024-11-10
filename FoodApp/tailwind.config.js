/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-240': 'repeat(auto-fill,minmax(240px,1fr))',
        'custom-2-1-1':'2fr 1fr 1fr',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%':{opacity:'1'}
        },
      },
      animation: {
        fadeInOnce: 'fadeIn 1s ease-in-out forwards'
      },
    },
  },
  plugins: [],
}