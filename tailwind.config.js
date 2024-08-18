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
        "color-palette-primary-190": "#132e18",
        darkolivegreen: "#1f532a",
        gray: "#828282",
        whitesmoke: "#eee",
        black: "#000",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e0e0e0",
        },
        "color-palette-primary-160": "#297037",
        "color-palette-neutral-90": "#272728",
      },
      spacing: {},
      fontFamily: {
        judson: "Judson",
        inter: "Inter",
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
