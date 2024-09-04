import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FA91D6',
        secondary: '#6DC3FC',
        white: '#FFFFFF',
        white2: '#FCFCFC',
      },
      fontFamily: {
        sans: ['Poppins', 'var(--font-sans)'],
        syne: ['Syne', 'var(--font-mono)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
