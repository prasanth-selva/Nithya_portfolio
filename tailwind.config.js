/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nithyah-black': '#10090D',
        'nithyah-burgundy': '#4A102C',
        'nithyah-pink': '#FF2D87',
        'nithyah-blush': '#FFB4D2',
        'nithyah-forest': '#092B20',
        'nithyah-emerald': '#2EE59D',
        'nithyah-white': '#FFF8FA',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      }
    },
  },
  plugins: [],
}
