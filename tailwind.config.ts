import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
    
            "color-palette-neutral-20": "#cfcfcf",
            "color-palette-neutral-80": "#3e3e40",       
            "color-palette-neutral-100": "#0e0e10",
            "m3-ref-secondary-secondary70": "#b0a7c0",
            darkolivegreen: "#1f532a",
            "color-palette-neutral-00": "#fff",
            "color-palette-neutral-90": "#272728",
            "color-palette-neutral-60": "#6e6e70",
            "color-palette-primary-20": "#d4fddc",
            "color-palette-accent-red-100": "#e10c07",
            black: "#000",
            "color-palette-neutral-50": "#868687",
            "color-palette-primary-180": "#1f532a",
            "color-palette-primary-100": "#85ff9e",
            "color-palette-neutral-10": "#e7e7e8",
            "color-palette-primary-190": "#132e18",
            "color-palette-red-100": "#F25B5B",
            gray: "#828282",
            
            whitesmoke: {
              "100": "#f3f3f3",
              "200": "#eee",
            },
            gainsboro: {
              "100": "#e6e6e6",
              "200": "#e0e0e0",
            },
            "color-palette-primary-160": "#297037",
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
            "81xl": "100px",
            "3xs": "10px",
            "13xl": "32px", 
          },
        },
        fontSize: {
          sm: "14px",
          lg: "18px",
          mini: "15px",
          inherit: "inherit",
          base: "16px",
          xs: "12px",
          "13xl": "32px",
    
    
        },
      },
      corePlugins: {
        preflight: false,
      },
};
export default config;