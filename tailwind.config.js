/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        mainContent: "calc(100% + 550px)",
        mainRow: "calc(100% + 20px)",
        threeCard: "calc(33.33% - 20px)",
        colFour: "calc(25% - 20px)",
        halfWidth: "calc(50% - 20px)",
        "one&half": "145%",

        iconBeforeW: "calc(100% + 30px)",
        sectionGradient: "calc(100% + 148px)",
      },
      colors: {
        black: "#000",
        blackish: "#16181b",
        blue: "#0164d3",
        // brown: "#946c48",
        spaceBlack: "#263238",
        // darkBlue: "#1a4d80",
        darkBlue: "#000037",
        darkGray: "#3e4555",
        // lightGray: "#f4f8fa",
        extraLightGray: "#f5f5f5",
        lightGray: "#d1d1d1",
        mediumGray: "#868686",
        // gray: "#8d97ad",
        gray: "#646464",
        grayish: "#e9ecef",
        opalGreen: "#a3cac7",
        orange: "#ff6a5b",
        peach: "#fdbfa8",
        pink: "#ff4d7e",
        purple: "#607df9",
        purplePink: "#8000FF",
        skyblue: "#0077b6",
        white: "#fff",
        // yello: "#FFCA36",
      },
    },
  },
  plugins: [],
}