module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#5865f2",
          dark: "#4751c4",
        },
        gray: {
          dark: "#36393f",
        },
        header: {
          primary: "#fff",
          secondary: "#b9bbbe",
        },
        input: {
          dark: "rgba(0, 0, 0, 0.1)",
          border: "rgba(0, 0, 0, 0.3)",
        },
        text: {
          disabled: "#72767d",
        },
      },
      fontSize: {
        12: "12px",
        14: "14px",
        16: "16px",
        24: "24px",
      },
      borderRadius: {
        input: "3px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
