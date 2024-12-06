module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#007bff",
          600: "#0056b3",
          400: "#00FFFF",
          scrollbarBg: "#101124", // Background color
          scrollbarThumb: "#00FFFF", // Thumb color
          scrollbarHover: "#00BFFF", // Hover color
        },
        black: "#101124",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
