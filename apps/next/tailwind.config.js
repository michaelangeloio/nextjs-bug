/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'apps/next/app/**/*.{js,ts,jsx,tsx,mdx}',
    'apps/next/app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    'apps/next/app/components/**/*.{js,ts,jsx,tsx,mdx}',
    'app/**/*.{js,ts,jsx,tsx,mdx}',
    'pages/**/*.{js,ts,jsx,tsx,mdx}',
    'components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      }
    },
  },
  plugins: [],
}
