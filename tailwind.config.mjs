/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#e4dde2ff",
        "secondary-color": "#9c9990ff",
        "accent-color": "#4b3b47ff",
      },
    },
  },
  plugins: [],
};
