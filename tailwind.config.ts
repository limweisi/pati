import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme=>({
        "home-background": "url('/Home_Background.jpeg')",
        "content-background": "url('/Content_Background.png')"
      }),
      height: {
        '128': '32rem',
        '576px': '36rem',
        '1044px':'65rem ',
        
      }
    },
  },
  plugins: [],
} satisfies Config;
