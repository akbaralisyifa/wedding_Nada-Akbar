/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      herrvon: ["Herr Von Muellerhoff", "serif"],
      alice: ["Alice", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
      playfair: ["Playfair Display", "serif"],
      dancing: ["Dancing Script", "cursive"],
      great: ["Great Vibes", "cursive"],
    },
    extend: {
      colors: {
        primary: "#4C2E1C",
        colorNav : "#C893A1"
      },
    },
  },
  plugins: [],
};
