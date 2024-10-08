/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        limecustom: 'hsl(61, 70%, 52%)',
        White: "hsl(0, 0%, 100%)",
        Slate100: "hsl(202, 86%, 94%)",
        Slate300: "hsl(203, 41%, 72%)",
        Slate500: "hsl(200, 26%, 54%)",
        Slate700: "hsl(200, 24%, 40%)",
        Slate900: "hsl(202, 55%, 16%)"
      },
    },
  },
  plugins: [],
}

