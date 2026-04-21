/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/rizzui/dist/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff8f0',
          100: '#feedd8',
          200: '#fcd9b0',
          300: '#f9be7d',
          400: '#f59848',
          500: '#E8751A',
          600: '#d45d0e',
          700: '#b0480e',
          800: '#8d3a14',
          900: '#733113',
        },
        gold: {
          50: '#fdfbf3',
          100: '#f9f4e0',
          200: '#f2e5bc',
          300: '#e8d08d',
          400: '#dbb75d',
          500: '#C9A84C',
          600: '#b08e36',
          700: '#8f712a',
          800: '#755b27',
          900: '#624c24',
        },
        cream: '#FDF8F0',
        maroon: {
          900: '#2D1B00',
          800: '#4a2e00',
          700: '#6b4300',
        },
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'saffron-gradient': 'linear-gradient(135deg, #E8751A 0%, #C9A84C 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FDF8F0 0%, #FFF9F2 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(201, 168, 76, 0.3)',
        'saffron': '0 4px 24px rgba(232, 117, 26, 0.3)',
        'card': '0 2px 20px rgba(45, 27, 0, 0.08)',
        'card-hover': '0 8px 40px rgba(45, 27, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
