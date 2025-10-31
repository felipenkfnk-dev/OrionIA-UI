/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'orion-light': '#e8f0ff',
        'orion-dark': '#0b1026',
        'orion-purple': '#7f5af0',
        'orion-blue': '#00bcd4',
      },
      backgroundImage: {
        'orion-dark': 'radial-gradient(circle at 20% 20%, rgba(127,90,240,0.35), transparent 55%), radial-gradient(circle at 80% 0%, rgba(0,188,212,0.25), transparent 60%), linear-gradient(160deg, #050814 0%, #0b1026 40%, #1a0f3d 100%)',
        'orion-light': 'linear-gradient(135deg, #f7fbff 0%, #e6f3ff 50%, #f0f7ff 100%)',
        'chip-1': 'linear-gradient(135deg, rgba(127,90,240,0.18), rgba(0,188,212,0.18))',
        'chip-2': 'linear-gradient(135deg, rgba(0,188,212,0.18), rgba(127,90,240,0.18))',
        'chip-3': 'linear-gradient(135deg, rgba(234,179,8,0.18), rgba(127,90,240,0.18))',
      },
      boxShadow: {
        'orion': '0 20px 45px -25px rgba(15, 23, 42, 0.6)',
        'orion-light': '0 18px 40px -20px rgba(14, 56, 104, 0.25)',
      },
    },
  },
  plugins: [],
};
