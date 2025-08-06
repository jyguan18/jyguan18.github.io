/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: "rgb(var(--color-blush) / <alpha-value>)",
        midnight: "rgb(var(--color-midnight) / <alpha-value>)",
        lavender: "rgb(var(--color-lavender) / <alpha-value>)",
        sky: "rgb(var(--color-lavender) / <alpha-value>)",
        mint: "rgb(var(--color-lavender) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
