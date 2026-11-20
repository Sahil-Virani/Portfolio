/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ground: '#f2f3f1',
        ink: '#111111',
        muted: '#4f5450',
        rule: '#c9ccc7',
        dim: '#c8cbc6',
        route: {
          red: '#e2231a',
          blue: '#0039a6',
          green: '#00933c',
          orange: '#ff6319',
          yellow: '#fccc0a',
          brown: '#996633',
          purple: '#b933ad'
        }
      },
      fontFamily: {
        sign: ['Overpass', 'system-ui', 'sans-serif'],
        code: ['"Overpass Mono"', 'ui-monospace', 'monospace']
      },
      maxWidth: {
        page: '1360px'
      }
    }
  },
  plugins: []
}
