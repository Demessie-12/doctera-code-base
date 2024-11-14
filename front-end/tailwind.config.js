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
        imaging:
          "url(https://res.cloudinary.com/dttmf74ie/image/upload/v1731015595/rd8akfxqp3mvrt4zmymp.jpg)",
        diagnostic:
          "url(https://res.cloudinary.com/dttmf74ie/image/upload/v1731015666/vc7mkssg3hxzrfdjhpog.jpg)",
        lab: "url(https://res.cloudinary.com/dttmf74ie/image/upload/v1731015529/gbokwzbcr5rgail7fmkr.jpg)",
        homeCare:
          "url(https://res.cloudinary.com/dttmf74ie/image/upload/v1731015387/lbzyjid2kqew5q0zttfu.jpg)",
      },
    },
  },
  plugins: [],
};
