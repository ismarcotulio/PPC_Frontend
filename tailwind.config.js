/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-palette-neutral-00": "#fff",
        darkolivegreen: "#1f532a",
        gray: "#828282",
        gainsboro: "#e6e6e6",
        black: "#000",
        "color-palette-primary-160": "#297037",
        darkslategray: "#132e18",
        "color-palette-neutral-90": "#272728",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        judson: "Judson",
        "semibold-subhead-2": "Roboto",
      },
      borderRadius: {
        "11xs-3": "1.3px",
        "10xs-7": "2.7px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
