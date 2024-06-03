/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins","sans-serif"],
      }, 
      colors: {
        primary: "#854d3d",
        secondary: "#4ale1b",
        brandDark:"#270c03",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem"
        },
      },
    },
  },
  plugins: [],
}