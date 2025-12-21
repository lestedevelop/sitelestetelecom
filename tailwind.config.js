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
        dark:"#2E2E2E"
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl:'0'
      },
      screens: {
       xl: "980px",
      },
    },
  },
  plugins: [],
};
