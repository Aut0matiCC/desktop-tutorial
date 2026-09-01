/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue':     '#0284C7',
        'brand-sky':      '#38BDF8',
        'brand-azure':    '#0EA5E9',
        'brand-deep':     '#0369A1',
        'brand-lime':     '#D4F843',
        'brand-lime-light': '#EBFFA6',
        'highway-orange': '#F0561D',
        'signal-red':     '#E31E4D',
        'trust-blue':     '#1C8FC7',
        'surface-card':   '#FFFFFF',
        'surface-subtle': '#F8FAFC',
        'surface-muted':  '#F1F5F9',
        'border-light':   '#E2E8F0',
        'border-subtle':  'rgba(226, 232, 240, 0.8)',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans:    ['Outfit', 'system-ui', 'sans-serif'],
        body:    ['Outfit', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
        'bento': '28px',
        'pill': '9999px',
      },
      boxShadow: {
        'bento': '0 10px 30px -5px rgba(14, 165, 233, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'bento-hover': '0 20px 40px -8px rgba(14, 165, 233, 0.15), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'hero-card': '0 20px 50px -10px rgba(2, 132, 199, 0.25)',
        'glow-lime': '0 0 25px rgba(212, 248, 67, 0.5)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 50%, #38BDF8 100%)',
        'hero-sky': 'radial-gradient(ellipse at 50% -20%, #38bdf8 0%, #0284c7 60%, #0369a1 100%)',
        'sky-mesh': 'linear-gradient(180deg, #0284C7 0%, #38BDF8 100%)',
        'bento-lime': 'linear-gradient(135deg, #D4F843 0%, #C7F22A 100%)',
        'soft-glass': 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.55) 100%)',
      },
    },
  },
  plugins: [],
}
