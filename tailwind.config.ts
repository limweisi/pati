import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "hero-pattern": "url('/top.jpeg')",
      })
    },
  },
  daisyui:{
    themes: ["acid"]
  },
  plugins: [require("daisyui")],
} satisfies Config;
