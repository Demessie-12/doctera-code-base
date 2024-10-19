/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DocBlue: "#134A70",
        DocOrange: "#F27D2D",
      },
      backgroundImage: {
        trusted: "url(/src/Assets/MedicalEquiment.jpg)",
      },
    },
  },
  plugins: [],
};
