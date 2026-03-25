export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4f46e5',
          dark: '#6366f1',
        },
        bgPrimary: {
          DEFAULT: '#ffffff',
          dark: '#0a0a0a',
        },
        bgSecondary: {
          DEFAULT: '#f8f9fa',
          dark: '#111111',
        },
        textPrimary: {
          DEFAULT: '#1a1a1a',
          dark: '#ffffff',
        },
        textSecondary: {
          DEFAULT: '#4a4a4a',
          dark: '#a1a1aa',
        },
        surface: {
          DEFAULT: 'rgba(0, 0, 0, 0.03)',
          dark: 'rgba(255, 255, 255, 0.05)',
        },
        customBorder: {
          DEFAULT: 'rgba(0, 0, 0, 0.1)',
          dark: 'rgba(255, 255, 255, 0.1)',
        }
      }
    },
  },
  plugins: [],
}
