/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        charcoal: '#121212',
        slate: '#1e2022',
        steel: '#4a4d52',
        silver: '#e2e8f0'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,.10), 0 0 36px rgba(255,255,255,.06)',
        insetSteel: 'inset 0 1px 0 rgba(255,255,255,.08)'
      }
    }
  },
  plugins: []
}
