/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Quicksand", "sans-serif"],
        titleFont: ["Raleway", "sans-serif"],      
      },
      colors: {
        bodyColor: "#111111",  
        lightText: "#ABFF9B",
        boxBg : "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",

      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
};

                    