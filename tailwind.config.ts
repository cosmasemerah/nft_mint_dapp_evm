/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f1f5f9",
        secondary: "#e9e9e9",
        dark: "#070a13",
      },
      fontFamily: {
        mokoto: ["var(--font-mokoto)"],
      },
    },
  },
  plugins: [],
};
