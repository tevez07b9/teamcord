module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          bright: "rgb(88, 101, 242)",
          dark: "rgb(71, 82, 196)",
        },
        black: "#000000",
        rgba: {
          borderDark: "rgba(0,0,0,0.3)",
          bgDark: "rgba(0,0,0,0.1)",
        },
        grey: {
          light: "#b9bbbe",
          dark: "#36393f",
        },
      },
      fontSize: {
        12: "12px",
        16: "16px",
      },
      borderRadius: {
        5: "5px",
        3: "3px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
