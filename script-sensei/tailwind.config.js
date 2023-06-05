/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': { 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

