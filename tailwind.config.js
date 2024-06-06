/** @type {import('tailwindcss').Config} */

const COLORS = {
  gray_primary: "rgba(142, 151, 164, 1)",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...COLORS,
      },
    },
  },
  plugins: [],
};
