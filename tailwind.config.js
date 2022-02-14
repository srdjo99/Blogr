module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      op: ["Overpass", "sans-serif"],
      ub: ["Ubuntu", "sans-serif"],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    extend: {
      spacing: {
        25: "25px",
        35: "35px",
        38: "38px",
        40: "40px",
        50: "50px",
        60: "60px",
        65: "65px",
        70: "70px",
        80: "80px",
        85: "85px",
        90: "90px",
        100: "100px",
        110: "110px",
        120: "120px",
        140: "140px",
        150: "150px",
        156: "156px",
        160: "160px",
        180: "180px",
        225: "225px",
        230: "230px",
        250: "250px",
        260: "260px",
        305: "305px",
        310: "310px",
      },
      fontSize: {
        "3-5xl": "2rem",
      },
      colors: {
        "red-250": "hsl(356, 100%, 66%)",
        "red-150": "hsl(355, 100%, 74%)",
        "gb-450": "hsl(208, 49%, 24%)",
        "gray-150": "hsl(240, 2%, 79%)",
        "gray-250": "#717276",
        "gray-350": "hsl(207, 13%, 34%)",
        "gray-650": "hsl(240, 10%, 16%)",
        "orange-350": "hsl(13, 100%, 72%)",
        "red-350": "hsl(353, 100%, 62%)",
        "gb-650": "hsl(237, 17%, 21%)",
        "gb-350": "hsl(237, 23%, 32%)",
        "gray-50": "#efefef",
      },
      screens: {
        pimg: "410px",
        ppimg: "500px",
        hxl: "1440px",
      },
    },
  },
  corePlugins: { container: false },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1280px",
          },
          "@screen xl": {
            maxWidth: "1120px",
          },
        },
      });
    },
  ],
};
