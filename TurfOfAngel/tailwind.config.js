/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Hiragino Sans"', '"Yu Gothic UI"', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#dfe8ff',
        night: '#07111f',
        neon: {
          cyan: '#5df6ff',
          pink: '#ff5dcb',
          lime: '#b9ff66',
          blue: '#6a7dff',
        },
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(147, 197, 253, 0.15), 0 18px 60px rgba(16, 24, 40, 0.35), 0 0 36px rgba(93, 246, 255, 0.18)',
        glow: '0 0 24px rgba(93, 246, 255, 0.28)',
      },
      backgroundImage: {
        aurora:
          'linear-gradient(135deg, rgba(93,246,255,0.22), rgba(255,93,203,0.18) 35%, rgba(185,255,102,0.14) 68%, rgba(106,125,255,0.18))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        },
        drift: {
          '0%': { transform: 'translate3d(-8%, -4%, 0) scale(1)' },
          '50%': { transform: 'translate3d(10%, 6%, 0) scale(1.08)' },
          '100%': { transform: 'translate3d(-8%, -4%, 0) scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        drift: 'drift 18s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
      },
      maxWidth: {
        prose: '72ch',
      },
    },
  },
  plugins: [],
}
