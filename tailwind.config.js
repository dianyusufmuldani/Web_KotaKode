/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        greenKotaKode: "#71CA9B",
      },
    },
    fontFamily: {
      Quicksand: ["Quicksand", "sans-serif"],
    },
  },
  plugins: [],
};
