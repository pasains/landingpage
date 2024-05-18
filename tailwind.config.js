/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#222222",
      "bold-orange": "#FF6633",
      "light-orange": "#F8972F",
      brown: "#CF9C82",
    },
    extend: {},
    fontSize: {
      sm: "12px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      "2xl": "64px",
    },
    backgroundImage: {
      gunung: "url('./image/pohon.jpg')",
    },
    space: {
      xsm: "3px",
      sm: "6px",
      md: "12px",
      lg: "18px",
      xl: "24px",
      "2xl": "30px",
      "3xl": "36px",
      "4xl": "42px",
    },
    size: {
      xsm: "86px",
      sm: "176px",
      lg: "224px",
      xl: "288px",
      "2xl": "360px",
      "3xl": "720px",
    },
  },
  plugins: [],
};
