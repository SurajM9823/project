/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fb-bg': '#18191A',
        'fb-card': '#242526',
        'fb-button': '#3E4042',
        'fb-hover': '#3A3B3C',
        'fb-text-primary': '#E4E6EB',
        'fb-text-secondary': '#B0B3B8',
        'fb-accent': '#2374E1',
      },
    },
  },
  plugins: [],
};