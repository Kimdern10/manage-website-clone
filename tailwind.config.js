/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens : {
  sm: "480px",
  md: "768px",
  lg: "976px",
  xl: "1440px",
    },
    extend: {
      colors:{
        brightred: "hsl(12, 88%, 59%)",
        brightredlight: "hsl(12,88%,69%)",
        brightredsuplight: "hsl(12, 88%, 69%)",
        darkblue: "hsl(288,39%,23%)",
        darkgrayishblue: "hsl(277,12%,61%)",
        verypalered: "hsl(13, 39%, 23%)",
        verydarkblue: "hsl(233,12%, 13%)",
        verylightgray: "hsl(0,0%, 98% )" ,
      },
    },
  },
  plugins: [],
}

