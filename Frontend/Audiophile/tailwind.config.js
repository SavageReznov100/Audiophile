/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        orange: "#D87D4A",
        pink: "#fbaf85",
        white: "#FFFFFF",
        grey: "#F1F1F1",
        lightgrey: "#FAFAFA",
        fullblack: "#000000",
        black: "#101010",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1025px",
        xl: "1280px",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "16px",
          md: "20px",
          lg: "80px",
          // sm:'32px',
          // md:'40px',
          // lg:'165px',
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
