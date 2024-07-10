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
        placeholderText: "#BAB8BC",
        navBg: "#ECECEC",
        btnListBg: "#343A40",
        productsBg: "#F3F3F3",
      },

      borderWidth: {
        5: "5px",
        1: "1px",
        3: "3px",
      },

      backgroundImage: {
        wallpaperDog: "url('./public/imges/WallpaperDog.png')",
      },

      fontSize: {
        10: "10px",
      },

      borderRadius: {
        45: "45px",
      },
    },
  },
  plugins: [],
};
