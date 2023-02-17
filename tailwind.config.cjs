/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#708F7C",
      secondary: "#3E7152",
      accent: "#CCCCCC",
    },
    extend: {
      fontFamily: {
        yourGrace: "Covered By Your Grace",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
