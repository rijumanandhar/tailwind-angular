/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-gray" : "#F7F7F7;",
        "primary-yellow" : "#FFE68C",
      }
    },
  },
  plugins: [],
}

