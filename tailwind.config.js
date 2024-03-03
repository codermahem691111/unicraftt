/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,

      "primary-1": "#007BF9",
      white: "#ffffff",
      "primary-2": "#F95F00",
      "secondary-1": "#B2D7FD",
      "secondary-2": "#2D96FF",
      "secondary-3": "#056DD6",
      "secondary-4": "#0061A8",
      warning: "#F7C654",
      error: "#F7695C",
      success: "#6EC29A",
      "semantic-primary": "#67A8FF",
      "neutral-1": "#202020",
      "neutral-2": "#FCFCFC",
      "neutral-3": "#FFFFFF",
      "typo-1": "#5E5E5E",
      "typo-2": "#FAFAFA",
      "typo-3": "#636363",
      "btn-primary": "#F95F00",
      "btn-hover": "#FA6E17",
      "gray-1":"#ABABAB"
    },
    shadow: {
      '2xl': '0 25px 30px -12px rgba(0, 0, 0, 0.25)',

      none: 'none',
    },
    /* screens: {
      xs: {
        min: "375px",
        max: "640px",
      },
      ms: {
        min: "360px",
        max: "740px",
      },
      md: {
        min: "640px",
        max: "1767px",
      },
      lg: {
        '"min"': "1024px",
        max: "1279px",
      },
      xl: {
        min: "1280px",
        max: "1535px",
      },
      "2xl": {
        min: "1536px",
      },
    }, */
    fontFamily: {
      Groteskt: ["Space-Grotesk", "sans-serif"],
    },
    extend: {
      spacing: {
        "8px": "8px",
        "12px": "12px",
        "24px": "24px",
        "48px": "48px",
        "96px": "96px",
        "192px": "192px",
      },
    },
  },
  plugins: [],
};
