import { DefaultTheme, DarkTheme } from '@react-navigation/native'
import { transparentize } from 'color2k'

const color = {
  primary: '#2ac9ff',
  dark: '#121212',
  gray: '#8e8e8e',
  light: '#ffffff',
  accent: '#fcdc74',
  error: '#f49cfc',
  darkBorder: '#272729',
}

const font = {
  default: 'Proxima',
  headers: 'Proxima-Black',
  accent: 'Proxima-Light',
}

const fontBase = 17 // @see https://type-scale.com/
const fontRatio = 1.333333
const fontScale = {
  xxxxxl: 6,
  xxxxl: 5,
  xxxl: 4,
  xxl: 3,
  xl: 2,
  l: 1,
  m: 0,
  s: -1,
  xs: -2,
  xxs: -3,
}

const fontSize = Object.keys(fontScale).reduce(
  (prev, currentValue) => {
    const curr = currentValue as keyof typeof fontScale
    prev[curr] = fontBase * Math.pow(fontRatio, fontScale[curr])
    return prev
  },
  { ...fontScale },
)

const lineHeight = {
  xs: 1.25,
  s: 1.5,
  m: 1.75,
  l: 2,
}

const spacing = {
  xxs: 3,
  xs: 7,
  s: 11,
  m: 15,
  l: 21,
  xl: 42,
  xxl: 56,
}

const borderRadius = {
  s: 1,
  m: 2,
  l: 4,
}

const theme = {
  color: {
    ...color,
    text: color.dark,
    background: color.light,
  },
  font,
  fontSize,
  lineHeight,
  spacing,
  borderRadius,
  statusBar: {
    darkText: true,
    backgroundColor: transparentize(color.light, 0.5),
  },
  header: {
    background: color.light,
    border: 'transparent',
  },
  navigation: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: color.primary,
    },
  },
  contentSkelton: {
    backgroundColor: transparentize(color.gray, 0.8),
    foregroundColor: transparentize(color.accent, 0.5),
    rect: {
      x: 0,
      y: 0,
      rx: 0,
      ry: 0,
    },
  },
}

export const darkTheme: typeof theme = {
  ...theme,
  color: {
    ...theme.color,
    text: color.light,
    background: color.dark,
  },
  statusBar: {
    darkText: false,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header: {
    background: color.dark,
    border: color.darkBorder,
  },
  navigation: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: theme.navigation.colors.primary,
    },
  },
  contentSkelton: {
    ...theme.contentSkelton,
    backgroundColor: transparentize(color.light, 0.85),
    foregroundColor: transparentize(color.accent, 0.67),
  },
}

export default theme
