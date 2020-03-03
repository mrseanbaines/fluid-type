const theme = {
  scale: 1.25,
  baseSizeMin: 13,
  baseSizeMax: 16,
  viewportMin: 576,
  viewportMax: 1440,
  // sizes: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
  sizes: [
    { name: 'xs', lineHeight: 1.5 },
    { name: 'sm', lineHeight: 1.4 },
    { name: 'md', lineHeight: 1.3 },
    { name: 'lg', lineHeight: 1.2 },
    { name: 'xl', lineHeight: 1.1 },
    { name: 'xxl', lineHeight: 1 },
  ],
  fonts: {
    primary: `Poppins, sans-serif`,
    secondary: `Playfair Display, serif`,
    tertiary: 'monospace',
  },
  weights: {
    bold: 800,
    medium: 600,
    light: 400,
  },
}

export default theme
