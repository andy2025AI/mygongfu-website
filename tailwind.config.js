/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '2rem', lg: '4rem', xl: '5rem', '2xl': '6rem' },
    },
    extend: {
      colors: {
        gold: '#FFD700',
        'gold-dark': '#E6B800',
        'gold-light': '#FFD700',
        primary: '#FFD700',
        'on-primary': '#000000',
        accent: '#00E676',
        'accent-dark': '#00C853',
        dark: '#000000',
        'dark-light': '#0D0D0D',
        'dark-lighter': '#1A1A1A',
        'dark-surface': '#050507',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
        mono: ['"SF Mono"', '"JetBrains Mono"', 'monospace'],
        display: ['"Arial Black"', '"Impact"', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
