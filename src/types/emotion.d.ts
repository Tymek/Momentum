import '@emotion/react'
import '@emotion/native'
import theme from 'utils/theme'

type ThemeType = typeof theme

declare module '@emotion/react' {
  export interface Theme extends ThemeType {} // eslint-disable-line @typescript-eslint/no-empty-interface
}

declare module '@emotion/native' {
  export interface Theme extends ThemeType {} // eslint-disable-line @typescript-eslint/no-empty-interface
}
