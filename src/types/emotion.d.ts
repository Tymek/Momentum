import '@emotion/react'
import theme from 'utils/theme'

type ThemeType = typeof theme

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
