module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        desktopImg: "url('/image-header-desktop.jpg')",
        mobileImg: "url('/image-header-mobile.jpg')"
      }),
      colors: {
        backBlue: "hsl(233, 47%, 7%)",
        cardBlue: "hsl(244, 38%, 16%)",
        softViolet: "hsl(277, 64%, 61%)"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
