export const colors = {
  apple: {
    blue: '#0071e3',
    blueHover: '#0077ed',
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
} as const

export type AppleColors = typeof colors
