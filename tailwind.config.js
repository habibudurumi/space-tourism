/** @format */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      /*home-backgroundImage*/
      "home-mobile": "url('../public/assets/home/background-home-mobile.jpg')",
      "home-tablet": "url('../public/assets/home/background-home-tablet.jpg')",
      "home-desktop":
        "url('../public/assets/home/background-home-desktop.jpg')",

      /*destinations backgroundImage */
      "dest-mobile":
        "url('../public/assets/destination/background-destination-mobile.jpg')",
      "dest-tablet":
        "url('../public/assets/destination/background-destination-tablet.jpg')",
      "dest-desktop":
        "url('../public/assets/destination/background-destination-desktop.jpg')",

      /*crew backgroundImage */
      "crew-mobile": "url('../public/assets/crew/background-crew-mobile.jpg')",
      "crew-tablet": "url('../public/assets/crew/background-crew-tablet.jpg')",
      "crew-desktop":
        "url('../public/assets/crew/background-crew-desktop.jpg')",

      /* technology backgroundImage*/
      "technology-mobile":
        "url('../public/assets/technology/background-technology-mobile.jpg')",
      "technology-tablet":
        "url('../public/assets/technology/background-technology-tablet.jpg')",
      "technology-desktop":
        "url('../public/assets/technology/background-technology-desktop.jpg')",
    },

    colors: {
      transparent: "transparent",
      white: "white",
      "dark-blue": "#0B0D17",
      "light-blue": "#D0D6F9",
    },
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontFamily: {
      condensed: "BarlowCondensed-Regular",
      barlow: "Barlow-Regular",
      bellefair: "Bellefair-Regular",
    },
  },
  extend: {},

  plugins: [],
};
