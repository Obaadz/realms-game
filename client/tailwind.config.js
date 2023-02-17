/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./layouts/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        game: "url('/images/game_bg.png')",
      },
    },
  },
  plugins: [],
};
