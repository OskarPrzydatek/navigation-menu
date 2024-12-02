import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "purple-primary": "var(--purple-primary)",
        "purple-secondary": "var(--purple-secondary)",
        "purple-tertiary": "var(--purple-tertiary)",

        "gray-primary": "var(--gray-primary)",
        "gray-secondary": "var(--gray-secondary)",
        "gray-tertiary": "var(--gray-tertiary)",

        "text-black": "var(--text-black)",
        "text-placeholder": "var(--text-placeholder)",
      },
    },
  },
  plugins: [],
} satisfies Config;
