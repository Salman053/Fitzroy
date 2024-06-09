/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        Yellow:"#FDB913",
        DarkGray:"#39474F",
        LightBlack:"#48545C",
        White:"#FEFEFE",
        gray:"#A0A6AA",
        darkBlue:"#5C6467"

      }
    },
  },
  plugins: [],
}
