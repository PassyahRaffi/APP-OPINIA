module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Arial"],
    },
    fontWeight: {
      hairline: 100,
      "extra-light": 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 450,
      semibold: 500,
      bold: 600,
      extrabold: 700,
      "extra-bold": 800,
      black: 900,
    },
    extend: {
      colors: {
        "background": "#FAFAFB",
        "white": "#FFFFFF",
        "search-icon": "#F5FBFF",
        "nav-icon": "#F2F3F3",
        "green-primary": "#05B1A1",
        "green-second": "#797979",
        "green-send": "#46B29C",
        "blue-primary": "#05678E",
        "orange-primary": "#EA6C00",
        "gray-nav": "#B1B1B1",
        "gray-poin": "#CACACA",
        "gray-icon-card": "#A3A3A3",
        "gray-border": "#EFEFEF",
        "gray-placeholder": "#D6D6D6",
        "gray-post": "#797979",
        "comment": "#D6D6D6",
      },
      dropShadow: {
        "nav": "0px 4px 4px rgba(97, 198, 230, 0.1)",
        "sampul": "0px 2px 4px rgba(0, 0, 0, 0.1)",
        "content": "0px 2px 4px 2px rgba(0, 0, 0, 0.1)",
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
