import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Pretendard"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'gray': {
          100: 'var(--grsc-100)',
          200: 'var(--grsc-200)',
          300: 'var(--grsc-300)',
          400: 'var(--grsc-400)',
          500: 'var(--grsc-500)',
          600: 'var(--grsc-600)',
          700: 'var(--grsc-700)',
          800: 'var(--grsc-800)',
          900: 'var(--grsc-900)'
        },
        'red': {
          100: 'var(--smtc-warn-light)',
          200: 'var(--smtc-warn-sub)',
          500: 'var(--smtc-warn)'
        },
        'yellow': {
          100: 'var(--smtc-caution-light)',
          200: 'var(--smtc-caution-sub)',
          500: 'var(--smtc-caution)'
        },
        'green': {
          100: 'var(--smtc-success-light)',
          200: 'var(--smtc-success-sub)',
          500: 'var(--smtc-success)'
        },
        'blue': {
          100: 'var(--smtc-info-light)',
          200: 'var(--smtc-info-sub)',
          500: 'var(--smtc-info)'
        },
        'purple': {
          100: 'var(--brnd-prpl-light)',
          200: 'var(--brnd-prpl-sub)',
          500: 'var(--brnd-prpl)'
        },
      }
    },
  },
  plugins: [],
};
export default config;
