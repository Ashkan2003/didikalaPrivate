import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainRed: "#f7858d",
        mainBlue:"#009ec9",
        mainGray:"#515151",
        lightGray:"#676767",
        mainBlack:"#212529"
      },
    },
  },
  plugins: [],
} satisfies Config;
