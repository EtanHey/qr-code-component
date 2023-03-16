/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: '--font-outfit'
      },
      colors: {
        qrWhite: 'hsl(0, 0%, 100%)',
        qrLightGray: 'hsl(212, 45%, 89%)',
        qrGrayishBlue: 'hsl(220, 15%, 55%)',
        qrDarkBlue: 'hsl(218, 44%, 22%)'
      }
    }
  },
  plugins: []
};
