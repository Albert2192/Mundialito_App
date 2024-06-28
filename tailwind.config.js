/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mundialito_Uno: "#454D55",
        mundialito_Dos: "#343A40",
        mundialito_Primary: "#3F6791",
      }
    },
  },
  plugins: [],
}

