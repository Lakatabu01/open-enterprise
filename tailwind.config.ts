import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      fontFamily: {
        fig: ['var(--font-figtree)'],
        inter: ['var(--font-inter)'],
        nunito: ['var(--font-nunito)'],
        young: ['var(--font-young_serif)'],
        space: ['var(--font-space_mono)'],
      },

      animation: {
        'slide-in-left': 'slideLeft 0.5s ease-in',
        'slide-in-right': 'slideRight 0.5s ease-in',
        'slide-in-up': 'slideUp 1s ease-in',
        'slide-in-down': 'slideDown 1s ease-in',
        'drop': 'expand 0.5s ease-in',


    },

    keyframes: {
      slideLeft: {
        '0%': { transform: 'translateX(-1000px)', opacity: "0" },
        "90%": {transform: 'translateX(15px)', opacity: "0.8"},
        '100%': { transform: 'translateX(0)', opacity: "1" },
      },

      slideRight: {
        '0%': { transform: 'translateX(1000px)', opacity: "0" },
        "90%": {transform: 'translateX(-15px)', opacity: "0.8"},
        '100%': { transform: 'translateX(0)', opacity: "1" },
      },

      slideUp: {
        '0%': { transform: 'translateY(1000px)', opacity: "0" },
        "90%": {transform: 'translateY(-15px)', opacity: "0.8"},
        '100%': { transform: 'translateY(0)', opacity: "1" },
      },

      slideDown: {
        '0%': { transform: 'translateY(-1000px)', opacity: "0" },
        "90%": {transform: 'translateY(15px)', opacity: "0.8"},
        '100%': { transform: 'translateY(0)', opacity: "1" },
      },

      expand: {
        '0%': { height: '0', opacity: "0", width: "100vw" },
        "90%": {height: '60vh', opacity: "0.8", width: "100vw"},
        '100%': { height: '50vh', opacity: "1", width: "100vw" },
      },

      
  },
  plugins: [],
}
}
}
export default config


// 0% {
//   -webkit-transform: translateX(-1000px);
//   transform: translateX(-1000px);
//   opacity: 0;
// }
// 100% {
//   -webkit-transform: translateX(0);
//   transform: translateX(0);
//   opacity: 1;
// }