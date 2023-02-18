/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./layouts/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        game: "url('/images/game_bg2.png')",
        auth: "url('/images/auth_bg.png')",
        dvd: "url('/images/dvd.png')",
      },
      fontFamily: {
        amiri: ["Amiri", "ui-sans-serif"],
        lalezar: ["Lalezar", "cursive"],
      },
    },
  },
  plugins: [],
};