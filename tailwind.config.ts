import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-lighter": "rgba(var(--primary-lighter)/ <alpha-value>)",
      primary: "rgba(var(--primary) / <alpha-value>)",
      "primary-darker": "rgba(var(--primary-darker) / <alpha-value>)",

      "secondary-lighter": "rgba(var(--secondary-lighter) / <alpha-value>)",
      secondary: "rgba(var(--secondary) / <alpha-value> ) ",
      "secondary-darker": "rgba(var(--secondary-darker)/ <alpha-value>)",

      "success-lighter": "rgba(var(--success-lighter)/ <alpha-value>)",
      success: "rgba(var(--success)/ <alpha-value>)",
      "success-darker": "rgba(var(--success-darker)/ <alpha-value>)",

      "error-lighter": "rgba(var(--error-lighter)/ <alpha-value>)",
      error: "rgba(var(--error)/ <alpha-value>)",
      "error-darker": "rgba(var(--error-darker)/ <alpha-value>)",

      "warning-lighter": "rgba(var(--warning-lighter)/ <alpha-value>)",
      warning: "rgba(var(--warning)/ <alpha-value>)",
      "warning-darker": "rgba(var(--warning-darker)/ <alpha-value>)",

      "foreground-muted": "rgba(var(--foreground-muted)/ <alpha-value>)",
      foreground: "rgba(var(--foreground)/ <alpha-value>)",

      "background-lighter": "rgba(var(--background-lighter)/ <alpha-value>)",
      background: "rgba(var(--background)/ <alpha-value>)",
      "background-darker": "rgba(var(--background-darker)/ <alpha-value>)",
      blur: {
        default: "blur(10px)",
        sm: "blur(4px)",
        md: "blur(8px)",
        lg: "blur(16px)",
        xl: "blur(24px)",
      },

      boxShadow: {
        default: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        sm: "0px 0px 4px rgba(0, 0, 0, 0.1)",
        md: "0px 0px 8px rgba(0, 0, 0, 0.1)",
        lg: "0px 0px 16px rgba(0, 0, 0, 0.1)",
        xl: "0px 0px 24px rgba(0, 0, 0, 0.1)",
      },

      fontFamily: {},
      fontWeight: {
        light: "300",
        normal: "400",
        bold: "700",
      },
      outlineOffset: {
        default: "0px",
        sm: "-1px",
        md: "-2px",
        lg: "-4px",
        xl: "-8px",
      },
      outlineWidth: {
        default: "1px",
        sm: "2px",
        md: "3px",
        lg: "4px",
        xl: "6px",
      },

      ringOffsetWidth: {
        default: "0px",
        sm: "-1px",
        md: "-2px",
        lg: "-4px",
        xl: "-8px",
      },

      ringWidth: {
        default: "1px",
        sm: "2px",
        md: "3px",
        lg: "4px",
        xl: "6px",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      // "primary-lighter": "#3e6b9a",
      // primary: "#255c99",
      // "primary-darker": "#1d4b7a",

      // "secondary-lighter": "#ffda66",
      // secondary: "#ffd046",
      // "secondary-darker": "#c4b400",

      // "success-lighter": "#00ff00",
      // success: "#00b289",
      // "success-darker": "#006600",

      // "error-lighter": "#ff6666",
      // error: "#ff3333",
      // "error-darker": "#cc0000",

      // "warning-lighter": "#ff9900",
      // warning: "#f59e0b",
      // "warning-darker": "#996600",

      // "foreground-muted": "#b3b3b3",
      // foreground: "#ffffff",

      // "background-muted": "#1a1a1a",
      // background: "#0f0f0f",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
