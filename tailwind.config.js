/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f5f9fb",
        orange: "#ff6c04",
        blue: {
          DEFAULT: "#23a9f6",
          light: "#f4fdff",
          text: "#74c3f9",
        },
        gray: "#666666",
      },
    },
  },
  plugins: [],
};
