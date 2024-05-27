module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#ffffff",
          text: "#202124",
        },
        secondary: {
          background: "#F5F7F7",
          text: "#000000",
        },
        gmail: {
          //grey
          grey1: "#F1F3F4",

          //red
          red1: "#FB4C2F",

          //blue
          blue1: "#3474E0",
          blue2: "#4F81E5",
          blue3: "#98D7E4",

          //green
          green1: "#3C7D40",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
