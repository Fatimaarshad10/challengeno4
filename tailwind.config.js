/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          red: 'hsl(0, 78%, 62%)',
          cyan: 'hsl(180, 62%, 55%)',
          orange: 'hsl(34, 97%, 64%)',
          blue: 'hsl(212, 86%, 64%)',
        },
        neutral: {
          'very-dark-blue': 'hsl(234, 12%, 34%)',
          'grayish-blue': 'hsl(229, 6%, 66%)',
          'very-light-gray': 'hsl(0, 0%, 98%)',
        },
        boxShadow: {
          '3xl': '-5px 6px 21px -4px rgba(76,78,97,0.69)',
        }
      },
    },
  },
  plugins: [],
}

