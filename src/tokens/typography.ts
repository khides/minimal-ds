export const typography = {
  fontFamily: {
    sfPro: [
      '-apple-system',
      'BlinkMacSystemFont',
      'SF Pro Text',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ],
    sfProDisplay: [
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
    heroHeadline: {
      desktop: '96px',
      tablet: '80px',
      mobile: '48px',
    },
    sectionHeadline: {
      desktop: '64px',
      mobile: '40px',
    },
    cardHeadline: {
      desktop: '40px',
      mobile: '28px',
    },
    bodyElevated: '21px',
    body: '17px',
    caption: '14px',
    eyebrow: '12px',
  },
} as const

export type Typography = typeof typography
