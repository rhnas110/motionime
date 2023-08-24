/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      motion_ime: ["ADLaM Display", "cursive"],
      // masih cari font buat body biar cocok
      primary: "Playfair Display",
      secondary: ["Poppins", "sans-serif"],
      // secondary: "Mulish",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#363636",
        grey: "#484848",
        accent: "#EEFFFF",
        motion_ime: "rgba(0,200,250,1)",
      },
    },
  },
  plugins: [],
};
