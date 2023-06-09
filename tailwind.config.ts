import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      backgroundImage: theme=>({
        "home-background": "url('/Home_Background.jpeg')",
        "content-background": "url('/Content_Background.png')",
        "hero-pattern":"url('/top.jpeg')"
      }),
      height: {
        '128': '32rem',
        '576px': '36rem',
        '1044px':'65rem ',
        'advert_content':'29.5rem',
      },
      width:{
        'advert_content':'59rem'
      }

    },
  },
  daisyui:{
    themes: ["acid","dark"]
  },
  plugins: [require("daisyui")],
} satisfies Config;
