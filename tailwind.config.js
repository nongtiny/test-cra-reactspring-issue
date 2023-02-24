/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-primary': '#000',
        'theme-black': '#111827',
        'theme-black-2': '#6B7280',
        'theme-gray': '#9CA3AF',
        'theme-gray-2': '#F3F4F2',
        'theme-gray-3': '#8A8E86',
        'theme-border': '#E5E7EB'
      },
      screens: {
        '3xl': '1700px',
      },
    },
  },
  plugins: [],
}