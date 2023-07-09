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
        'menu-content': '1687px',
        'menu-product':'345.2px',
        'menu-featured-products': '1341.8px',
        'products-div':'313.19px',
        'products-img': '297.19px',
      },
      width:{
        'advert_content':'59rem',
        'menu-content': '59rem',
        'products-div':'313.19px',
        'products-img': '297.19px',
      },
      margin:{
        '488px': '488px'
      },

    },
  },
  daisyui:{
    themes: ["acid","dark"]
  },
  plugins: [require("daisyui")],
} satisfies Config;
