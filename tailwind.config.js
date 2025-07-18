/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  safelist: [
    'bg-blue-400',
    'bg-green-400',
    'bg-yellow-400',
    'bg-purple-400',
    'bg-cyan-400',
    'bg-red-400',
    'bg-orange-400',
    'bg-pink-400'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
