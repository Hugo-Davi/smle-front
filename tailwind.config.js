/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baltic: {
          50: '#D9D9D9',
          900: '#242527',
          950: '#1E1E1E'
        } ,
        fuchsia: {
          350: '#F79BFF'
        }
      }
    },
  },
  plugins: [],
}

