/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx,js}","./node_modules/flowbite/**/*.js" 
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
