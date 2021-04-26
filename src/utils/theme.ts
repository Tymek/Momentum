const theme = {
  color: {
    primary: '#2ac9ff',
    text: '#2a2a2a',
    background: '#ffffff',
    accent: '#fcdc74',
    error: '#f49cfc',
  },
  font: {
    default: 'Proxima',
    headers: 'Proxima-Black',
    accent: 'Proxima-Light',
  },
  spacing: {
    sm: '6px',
    md: '14px',
    lg: '24px',
  },
}

export const darkTheme: typeof theme = {
  ...theme,
  color: {
    ...theme.color,
    background: '#2a2a2a',
    text: '#ffffff',
  },
}

export default theme
