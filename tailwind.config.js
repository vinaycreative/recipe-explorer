/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './features/**/*.{js,jsx,ts,tsx}',
    './providers/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FAF9F6',
          dark: '#1A1814',
        },
        foreground: {
          DEFAULT: '#2C2416',
          muted: '#8A8175',
          dark: '#F5F0E8',
          'muted-dark': '#A89F94',
        },
        card: {
          DEFAULT: '#F3F0EA',
          dark: '#2A2620',
        },
        accent: {
          DEFAULT: '#C45C3E',
          dark: '#E07A5F',
        },
        primary: {
          DEFAULT: '#4A5D3F',
          dark: '#6B8A5E',
        },
        border: {
          DEFAULT: '#E8E2D9',
          dark: '#3D3830',
        },
      },
      fontFamily: {
        serif: ['PlayfairDisplay_700Bold'],
        'serif-semibold': ['PlayfairDisplay_600SemiBold'],
        sans: ['Inter_400Regular'],
        'sans-medium': ['Inter_500Medium'],
        'sans-semibold': ['Inter_600SemiBold'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
