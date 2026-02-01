/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          red: '#FF0000',
          crimson: '#DC143C',
          darkred: '#8B0000',
          blood: '#CC0000'
        },
        gold: {
          light: '#FFD700',
          DEFAULT: '#D4AF37',
          dark: '#B8960F',
          brass: '#C5A572'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Courier New', 'Courier', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 0.8s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 0, 0, 0.5), 0 0 20px rgba(220, 20, 60, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(220, 20, 60, 0.6)' },
        },
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
