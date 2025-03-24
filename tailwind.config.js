/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        customBlue: "#1B1B3C", // Add your custom color here
        customPink: "#FF4562",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
