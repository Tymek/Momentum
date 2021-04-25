import React, { FC } from 'react'
import { css, Global, ThemeProvider } from '@emotion/react'

import theme from 'utils/theme'

const fonts = css`
  @font-face {
    font-family: 'Proxima';
    src: url('/fonts/ProximaNova-Regular.eot');
    src: url('/fonts/ProximaNova-Regular.eot?#iefix') format('embedded-opentype'),
      url('/fonts/ProximaNova-Regular.woff2') format('woff2'),
      url('/fonts/ProximaNova-Regular.woff') format('woff'),
      url('/fonts/ProximaNova-Regular.ttf') format('truetype'),
      url('/fonts/ProximaNova-Regular.svg#ProximaNova-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Proxima-Light';
    src: url('/fonts/ProximaNova-Light.eot');
    src: url('/fonts/ProximaNova-Light.eot?#iefix') format('embedded-opentype'),
      url('/fonts/ProximaNova-Light.woff2') format('woff2'),
      url('/fonts/ProximaNova-Light.woff') format('woff'),
      url('/fonts/ProximaNova-Light.ttf') format('truetype'),
      url('/fonts/ProximaNova-Light.svg#ProximaNova-Light') format('svg');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Proxima-Black';
    src: url('/fonts/ProximaNova-Black.eot');
    src: url('/fonts/ProximaNova-Black.eot?#iefix') format('embedded-opentype'),
      url('/fonts/ProximaNova-Black.woff2') format('woff2'),
      url('/fonts/ProximaNova-Black.woff') format('woff'),
      url('/fonts/ProximaNova-Black.ttf') format('truetype'),
      url('/fonts/ProximaNova-Black.svg#ProximaNova-Black') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  body {
    font-family: Proxima, 'Proxima Nova', sans-serif;
  }
`

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={fonts} />
    {children}
  </ThemeProvider>
)

export default Theme
