/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#050301",
        secondaryColor: "#f5f5f5",
      },
      fontFamily: {
        roboto: ["primary-font", "sans-serif"],
        lobster: ["contact-page-font", "sans-serif"],
      },
    },
  },
  plugins: [],
};
