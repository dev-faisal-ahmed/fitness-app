/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#101010',
        primary: '#C4FE20',
      },
    },
  },
  plugins: [],
};
