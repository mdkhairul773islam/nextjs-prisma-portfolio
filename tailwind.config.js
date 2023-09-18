/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          "0%": { transform: "translateX(10px)" },
          "50%": { transform: "translateX(-10px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        moving: "move 2s linear infinite",
      },
    },
  },
  plugins: [],
};
