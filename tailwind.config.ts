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



      },
    },
  },
  plugins: [],
}
export default config
