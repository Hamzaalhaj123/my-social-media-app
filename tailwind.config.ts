import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
    extend: {
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

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        default: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        sm: "0px 0px 4px rgba(0, 0, 0, 0.1)",
        md: "0px 0px 8px rgba(0, 0, 0, 0.1)",
        lg: "0px 0px 16px rgba(0, 0, 0, 0.1)",
        xl: "0px 0px 24px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
