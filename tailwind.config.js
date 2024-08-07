/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        normalTodo: ["'Hachi Maru Pop'", 'sans-serif'],
        title: ["'Mochiy Pop P One'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
