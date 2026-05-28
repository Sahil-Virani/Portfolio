/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#08111f',
        panel: '#0d1728',
        muted: '#94a3b8',
        accent: '#38bdf8',
        accentSoft: '#0ea5e9',
        border: 'rgba(148, 163, 184, 0.14)'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56,189,248,0.12), 0 10px 35px rgba(2,8,23,0.45)'
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
}