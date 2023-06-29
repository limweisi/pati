import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme=>({
        "home-background": "url('/Home_Background.jpeg')",
        "content-background": "url('/Content_Background.png')"
      })
    },
  },
  plugins: [],
} satisfies Config;
