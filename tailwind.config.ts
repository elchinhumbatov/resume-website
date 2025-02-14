import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Using CSS variables for dynamic theming
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Additional custom colors
        // primary: "#1DA1F2",
        // secondary: "#14171A",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#2196F3",
              foreground: "var(--foreground)",
            },
            focus: "#6bb5ec",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#1976D2",
              // DEFAULT: "#6bb5ec",
              foreground: "var(--foreground)",
            },
            focus: "#6bb5ec",
          },
        }
      },
    }),
  ],
} satisfies Config;

export default config;