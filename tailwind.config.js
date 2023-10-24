/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      // xl: "924px",

      // "2xl": "1480px",
      "2xl": "1194px",
    },
    extend: {
      colors: {
        primary: {
          100: "#003B4987",
          200: "#003440",
          300: "#6EFFFF",
          400: "#005C79",
          500: "#002B35",
        },
        secondary: "",
        stellarGray: {
          50: "#f0f1f2",
          200: "#F6F6F7",
          300: "#7E808F",
          400: "#FEFEFE",
          500: "#C4CAD6",
        },
        stellarBlue: "#3FB4C3",
        dark: "#1E2833",
        green: "#004B4B",
        green2: "#005D5D",
        green3: "#ADFAFFC9",
        green4: "#004C56",
        blue: "#005C79",
      },
      fontSize: {
        // // xs: "",
        // sm: "",
        // base: "",
        // lg: "",
        // xl: "",
        // "2xl": "",
        "3xl": "35px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        firma: ["BRFirma-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      appearance: ["responsive"],
    },
  },
};
