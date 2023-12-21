/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "container-color": "#353535",
        "main-color": "#ffc815",
        "bg-color": "#292929",
      },
    },
  },
  plugins: [],
};
