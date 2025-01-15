/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: "#2950DB",
        primary_color_hover: "#2950db36",
        secondary_color: "#7ca100",
        text_primary: "#26272E",
        text_secondary: "#171717",
        text_light: "#797D7E",
        border_light: "#f5f5f52f",
      },
    },
  },
  plugins: [],
}