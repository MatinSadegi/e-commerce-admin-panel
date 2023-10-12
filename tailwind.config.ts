import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-teal": "linear-gradient(-45deg, #0da487, #009289)",
      },

      animation: {
        spinner: "rotation 1s linear infinite",
      },
      keyframes: {
        rotation: {
          "0% ": { transform: "rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      backgroundColor: {
        "status-green": "rgba(47,135,51,0.15)",
        "status-red": "rgba(226,36,84,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
