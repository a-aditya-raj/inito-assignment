import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-background": "url(https://cdn.inito.com/inito_website/v2_main_hero_background.png)",
        "underline": "url('https://cdn.inito.com/inito_website/plain_underline.png')",
        "encircle": "url('https://cdn.inito.com/inito_website/rough_circle.png')",
        "strike-text": "url('https://cdn.inito.com/inito_website/strike_through.png')",
        "plus": "url('https://cdn.inito.com/inito_website/plus.png')",
        "egg": "url('https://s3-alpha-sig.figma.com/img/5c45/fc20/d281f9f0d0962b3dd583b5fc3cdb36c3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=plrozfEXTDBm3E7urV2qqXKvyZI3361rThfPpxaj3ObKQ0joxtYgxguPaMM~w3bZMaNMcAcLW8CIl0BrpoDY9EMBfaooIfxMKx3zU-n28JX-f~accyI65dMFImRltNWPEQAZ-zYjI0~Hn7ZjKKuPRbE~j5h5K1W3jwgi1Duosr2kmN5MPqQ51VvUVUPCO-mUYJGMEibfm74JZhUKZL767whD9ocfky~IrhC4CojQMIxRWmge6PJyGvtlvGRqLUGP~kWdorrogbqWEV0QqV9W1VFpvgjhqTXp64bw9T424XadqSZSFcrKnic1Pc2o-HTRakOu9chS9l9n1X52Z968zA__')",
        "star": "url('https://cdn.inito.com/inito_website/homepage_4_star.png')"
      },
    },
  },
  plugins: [],
};
export default config;
