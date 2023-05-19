/** @type {import('tailwindcss').Config} */
import daisy from "daisyui";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisy,
  ],
};

