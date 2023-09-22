/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        wm: "#FABC16",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
