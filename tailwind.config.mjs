/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#EB2411",
        secondary: "#2181EE",
        accent: "#F6AC07",
      },
      screens: {
        xs: "560px",
      },
    },
  },
  plugins: [],
};
