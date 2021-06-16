import React, { FC } from 'react'
import { css, Global, ThemeProvider } from '@emotion/react'
import useColorSchemeTheme from './hooks/useColorSchemeTheme'

const fonts = css`
  @font-face {
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 400;
    src: local(''), url('/fonts/MavenPro-Black.woff2') format('woff2'),
      url('/fonts/MavenPro-Black.woff') format('woff');
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local(''), url('/fonts/Lato-Regular.woff2') format('woff2'),
      url('/fonts/Lato-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Lato-Bold';
    font-style: normal;
    font-weight: 400;
    src: local(''), url('/fonts/Lato-Bold.woff2') format('woff2'),
      url('/fonts/Lato-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Lato-Italic';
    font-style: normal;
    font-weight: 400;
    src: local(''), url('/fonts/Lato-Italic.woff2') format('woff2'),
      url('/fonts/Lato-Italic.woff') format('woff');
  }

  @font-face {
    font-family: 'Lato-Light';
    font-style: normal;
    font-weight: 400;
    src: local(''), url('/fonts/Lato-Light.woff2') format('woff2'),
      url('/fonts/Lato-Light.woff') format('woff');
  }

  body {
    font-family: 'Lato', sans-serif;
  }
`

const Theme: FC = ({ children }) => {
  const theme = useColorSchemeTheme()

  return (
    <ThemeProvider theme={theme}>
      <Global styles={fonts} />
      {children}
    </ThemeProvider>
  )
}

export default Theme
