/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#009373",
        light: "#F2F2F2",
        dark:"#2E2E2E",
        graylight:"#6a7282",
        graylighter:"#E8EBEA",
        darkgreen: "#045441",
        lightgreen: "#8fff85",
        corporate: "#002019",
        corporateDark: "#121212",
},
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        xl:'0'
      },
      screens: {
       xl: "1280px",
        lg: "1024px",
        md: "768px",
      },
    },
  },
  plugins: [],
};
