/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparant: "transparant",
        white: "#ffffff",
        black: "#222222",
        "bold-orange": "#FF6633",
        "light-orange": "#F8972F",
        brown: "#CF9C82",
        "gray-200": "#E5E7EB",
      },
      fontFamily: {
        redditmono: ["Reddit Mono"],
        nunito: ["Nunito"],
      },
      fontSize: {
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "42px",
        "3xl": "64px",
      },
      backgroundImage: {
        gunung: "url('./image/pohon.jpg')",
        pattren: "url('./image/pattren.jpg')",
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
        xsm: "50px",
        sm: "90px",
        md: "176px",
        lg: "224px",
        xl: "288px",
        "2xl": "360px",
        "3xl": "720px",
      },
      zIndex: {
        9999: 9999,
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "12px",
        "3xl": "60px",
      },
    },
    plugins: [],
  },
};
