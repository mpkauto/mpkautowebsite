import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class", // Set to class for future toggling
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./client/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Custom black-themed design system
        black: "#0A0A0A",
        "gray-dark": "#111827",
        "gray-light": "#1F2937",
        
        // Text colors
        "text-base": "#F1F5F9",
        "text-muted": "#9CA3AF",
        
        // New metallic/silver color system
        silver: "#C0C0C0",
        metallic: "#9B9B9B", // Updated to match your request
        frost: "#E5E5E5", // Updated to match your request
        graphite: "#1A1A1A", // Updated to match your request
        platinum: "#D4D4D4", // Added as requested
        accent: "#4FD1C5", // Added optional teal accent
        
        // Accent colors (replacing blue with silver)
        primary: {
          DEFAULT: "#C0C0C0", // Silver instead of blue
          50: "#FFFFFF",
          100: "#F5F5F5",
          200: "#ECECEC",
          300: "#DADADA",
          400: "#C0C0C0",
          500: "#A9A9A9",
          600: "#909090",
          700: "#787878",
          800: "#606060",
          900: "#484848",
          950: "#2A2A2A",
        },
        danger: "#A9A9A9", // Metallic instead of red
        
        // UI system colors
        background: "#0A0A0A", // Black background
        foreground: "#F1F5F9", // Text base color
        
        border: {
          DEFAULT: "#1F2937", // Gray light as border
          light: "#374151",
          dark: "#111827",
        },
        
        // Typography color system
        text: {
          primary: "#F1F5F9", // Text base
          secondary: "#E2E8F0",
          muted: "#9CA3AF", // Text muted
        },
        
        // Add shadcn/ui required colors
        ring: "#C0C0C0", // Silver instead of blue
        input: {
          DEFAULT: "#1F2937",
          focus: "#C0C0C0", // Silver instead of blue
        },
        card: {
          DEFAULT: "#111827", // Gray dark
          foreground: "#F1F5F9",
        },
        destructive: {
          DEFAULT: "#A9A9A9", // Metallic instead of red
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#1F2937", // Gray light
          foreground: "#9CA3AF",
        },
        popover: {
          DEFAULT: "#111827", // Gray dark
          foreground: "#F1F5F9",
        },
      },
      fontFamily: {
        heading: ["Helvetica Neue Medium", "Helvetica Neue", "Arial", "sans-serif"],
        body: ["Fauna One", "Georgia", "serif"],
        sans: ["Fauna One", "Georgia", "serif"],
      },
      boxShadow: {
        // Enhanced shadow definitions
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [typography],
};

export default config;
