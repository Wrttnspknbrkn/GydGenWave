/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1671D9",
        secondary: "#80BBFF",
        text_primary: "#344054",
        text_secondary: "#BEC0CA",
        secondary_text: "#667185",
      }
    },
  },
  plugins: [],
};
