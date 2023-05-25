/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // フォントを追加
      fontFamily: {
        sulphur: ["Sulphur Point"],
      },
    },
  },
  plugins: [],
};
