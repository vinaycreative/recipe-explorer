export const colors = {
  light: {
    background: '#FAF9F6',
    foreground: '#2C2416',
    foregroundMuted: '#8A8175',
    card: '#F3F0EA',
    accent: '#C45C3E',
    primary: '#4A5D3F',
    border: '#E8E2D9',
  },
  dark: {
    background: '#1A1814',
    foreground: '#F5F0E8',
    foregroundMuted: '#A89F94',
    card: '#2A2620',
    accent: '#E07A5F',
    primary: '#6B8A5E',
    border: '#3D3830',
  },
} as const;

export type ThemeColors = typeof colors.light;
