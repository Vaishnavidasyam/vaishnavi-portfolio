/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },

      colors: {
        bg: "#0b0c10",
        surface: "#16161A",
        surfaceSoft: "#242629",
        primary: "#7F5AF0",
        accent: "#2CB67D",
        cyan: "#00C2FF",
      },

      boxShadow: {
        glass: "0 18px 45px rgba(15,23,42,0.65)",
        soft: "0 10px 30px rgba(0,0,0,0.4)",
      },

      backgroundImage: {
        grid: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
      },

      backgroundSize: {
        grid: "40px 40px",
      },

      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },

  plugins: [],
};
