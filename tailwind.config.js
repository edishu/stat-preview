module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      lexend: ["Lexend Deca", "ui-sans-serif", "system-ui"]
    },
    extend: {
      backgroundImage: () => ({
        desktopImg: "url('/image-header-desktop.jpg')",
        mobileImg: "url('/image-header-mobile.jpg')"
      }),
      colors: {
        backBlue: "hsl(233, 47%, 7%)",
        cardBlue: "hsl(244, 38%, 16%)",
        softViolet: "hsl(277, 64%, 61%)",
        paraWhite: "hsla(0, 0%, 100%, 0.75)",
        statWhit: "hsla(0, 0%, 100%, 0.6)"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
