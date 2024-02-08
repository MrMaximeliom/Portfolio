import type { Config } from "tailwindcss";
const config: Config = {
  darkMode:'class',
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "header": "var(--kaushan-reqular)",
      "second": "var(--single-day-reqular)",
    },
    boxShadow:{
      "custom-light":" 0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c"
    },





   
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: {
           DEFAULT: '#00f260',
        },
        dark:{
          DEFAULT:"#010101",
          100:"#0a0b0e",
          200:"#16181d",
          300:"#16181d",
          500:"#0f1115",
          700:"#202125"
        }
     },
     
      
    },
  },
  variants:{
    extend:{
      boxShadow:["dark"]
    }
  },
  plugins: [],
};
export default config;
