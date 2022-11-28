/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade .15s ease-in',
        blink: 'blink 2s ease-in-out infinite',
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0, transform: 'translateX(-1rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        blink: {
          '0%,100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
