import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      colors: {
        primary: "#ffbe33",
        secondary: "#222831",
      },
      fontFamily: {
        dancing: ["var(--font-dancing-script)", "cursive"],
        openSans: ["var(--font-open-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
