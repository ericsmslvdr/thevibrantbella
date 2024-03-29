/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        pink: '#ec287a',
        lightPink: '#f9e5ff',
        dim: 'rgba(0,0,0,0.50)'
      },
    },

  },
  plugins: [require('flowbite/plugin')],
}

