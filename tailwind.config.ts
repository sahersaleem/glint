import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {

    extend: {
      screens:{
        'xs':'200px'
      },
      fontFamily:{
       lora:['var(--font-geist-lora)'],
       mons:['var(--font-geist-mons)']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
         grey:"rgba(255 , 255 , 255 , 0.5)",
         grey2:"rgba(255 , 255 , 255 , 0.25)",
         blur:"rgba(0 , 0 , 0 , 0.2)"
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
} satisfies Config;
