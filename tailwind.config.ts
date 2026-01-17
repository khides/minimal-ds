import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        apple: {
          blue: '#0071e3',
          'blue-hover': '#0077ed',
          gray: {
            100: '#f5f5f7',
            200: '#e8e8ed',
            300: '#d2d2d7',
            400: '#afafb2',
            500: '#86868b',
            600: '#6e6e73',
            700: '#515154',
            800: '#333336',
            900: '#1d1d1f',
          },
          black: '#000000',
          white: '#ffffff',
        },
      },
      fontFamily: {
        'sf-pro': [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Text',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        'sf-pro-display': [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        'hero-headline': ['96px', { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '600' }],
        'hero-headline-md': ['80px', { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '600' }],
        'hero-headline-sm': ['48px', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' }],
        'section-headline': ['64px', { lineHeight: '1.05', letterSpacing: '-0.01em', fontWeight: '600' }],
        'section-headline-sm': ['40px', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' }],
        'card-headline': ['40px', { lineHeight: '1.1', letterSpacing: '-0.005em', fontWeight: '600' }],
        'card-headline-sm': ['28px', { lineHeight: '1.14', letterSpacing: '-0.005em', fontWeight: '600' }],
        'body-elevated': ['21px', { lineHeight: '1.38', letterSpacing: '0.011em', fontWeight: '400' }],
        'body': ['17px', { lineHeight: '1.47', letterSpacing: '-0.022em', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.43', letterSpacing: '-0.016em', fontWeight: '400' }],
        'eyebrow': ['12px', { lineHeight: '1.33', letterSpacing: '0.066em', fontWeight: '600', textTransform: 'uppercase' }],
      },
      spacing: {
        'nav-height': '44px',
        'section-padding': '100px',
        'section-padding-sm': '60px',
      },
      maxWidth: {
        'content': '980px',
        'content-wide': '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config
