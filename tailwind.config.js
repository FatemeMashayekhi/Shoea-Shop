/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./Pages/*.js"],
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
      },

      borderWidth: {
        5: "5px",
        1: "1px",
      },

      backgroundImage: {
        wallpaperDog: "url('./public/images/WallpaperDog.png')",
      },
    },
  },
  plugins: [],
};
