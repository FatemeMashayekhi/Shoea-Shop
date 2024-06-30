/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./Pages/*.js", "./Layouts/main-layout/*.js"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
      },

      colors: {
        darkBlue: "#152536",
        darkBtn: "#212529",
        grayBtn: "#6C757D",
        lightGray: "#FAFAFA",
        textGray: "#757475",
      },

      borderWidth: {
        5: "5px",
        1: "1px",
      },

      backgroundImage: {
        wallpaperDog: "url('./public/imges/WallpaperDog.png')",
      },

      fontSize: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
