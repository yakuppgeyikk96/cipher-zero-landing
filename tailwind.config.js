/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#090909",
        link: "#c3c3c3",
        primary: "#c24916",
        "primary-20": "#e7632c",
        "primary-foreground": "#ececec",
        disabled: "#999999",
      },
    },
  },
  plugins: [],
};
