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
        gray: "71717a"
    },
    extend: {},
    fontSize: {
      sm: "12px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      "2xl": "52px",
      "3xl": "64px",
    },
    backgroundImage: {
      gunung: "url('./image/pohon.jpg')",
    },
    space: {
      xsm: "5px",
      sm: "10px",
      md: "25px",
      lg: "30px",
      xl: "50px",
      "2xl": "100px",
      "3xl": "150px",
      "4xl": "200px",
    },
    size: {
      xsm: "90px",
      sm: "176px",
      lg: "224px",
      xl: "288px",
      "2xl": "360px",
      "3xl": "720px",
    },
    zIndex: {
      9999: 9999,
    },
  },
  plugins: [],
};
