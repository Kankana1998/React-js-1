/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgcolor:"#050913"
      },
      backgroundImage:{
        site:"url('./img/bg.png')",
        about: "url('./img/1.png')",
        services: "url('./img/2.png')",

      }
    },
    fontFamily:{
      primary:"Poppins",
      secondary:"Roboto"
    },
    container:{
      padding:{
        DEFAULT: "15px",
      }
    },
    screens: {
      sm:"640px",
      md:"768px",
      lg:"960px",
      xl:"1200px",

    },
  },
  plugins: [],
}

