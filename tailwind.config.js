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
      backgroundImage: {
        mount: "url('./image/gh.jpg')",
        mount2: "url('./image/ghghgh.jpg')",
        caving: "url('./image/cv.jpg')",
        caving2: "url('./image/cvcvcv.jpg')",
        caving4: "url('./image/cvcvcvcv.jpg')",
        climbing: "url('./image/rc.jpg')",
        nature: "url('./image/lh.jpg')",
        forest: "url('./image/lawu2.jpeg')",
      },
        backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
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
      zIndex: {
        0 : 9999,
        10 : 10,
        20 : 20,
        30 : 30,
      }
    },
    plugins: [],
  },
};
