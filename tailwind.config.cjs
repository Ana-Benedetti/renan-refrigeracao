/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        nova: ['NovaFlat', 'ui-sans-serif'],
        ubuntu: ['Ubuntu-Regular', 'ui-sans-serif'],
        ubuntuLight: ['Ubuntu-Light', 'ui-sans-serif'],
        ubuntuBold: ['Ubuntu-Bold', 'ui-sans-serif'],
      },
      colors: {
        darkGreen: 'rgb(var(--darkGreen) / <alpha-value>)',
        gray: 'rgb(var(--gray) / <alpha-value>)',
        lightGreen: 'rgb(var(--lightGreen) / <alpha-value>)',
        mediumGreen: 'rgb(var(--mediumGreen) / <alpha-value>)',
        navyBlue: 'rgb(var(--navyBlue) / <alpha-value>)',
        neutral: 'rgb(var(--neutral) / <alpha-value>)',
        whiteOpacity: 'var(--white-opacity)',
      },
    },
  },
  plugins: [],
};
