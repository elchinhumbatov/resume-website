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
        primary: "#1DA1F2",
        secondary: "#14171A",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui(),
  ],
} satisfies Config;

export default config;