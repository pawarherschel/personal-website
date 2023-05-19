/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        KatPilled: {
          primary: '#fbcfe8',
          secondary: '#D926AA',
          accent: '#1FB2A5',
          neutral: '#191D24',
          'base-100': '#2A303C',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
    darkTheme: "KatPilled",
  },
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'low-poly-grid': "url('./haikei/low-poly-grid-haikei.svg')",
        'stacked-peaks': "url('./haikei/stacked-peaks-haikei.svg')",
      },
      fontFamily: {
        nekonium: ["Nekonium", "sans-serif"],
        jandaElegant: ["JandaElegantHandwriting", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
