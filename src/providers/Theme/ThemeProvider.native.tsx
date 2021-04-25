import React, { FC } from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { ThemeProvider } from '@emotion/react'

import theme from 'utils/theme'

const Theme: FC = ({ children }) => {
  const [fontsLoaded] = useFonts({
    Proxima: require('./assets/fonts/ProximaNova-Regular.ttf'),
    'Proxima-Light': require('./assets/fonts/ProximaNova-Light.ttf'),
    'Proxima-Black': require('./assets/fonts/ProximaNova-Black.ttf'),
  })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? children : <AppLoading />}
    </ThemeProvider>
  )
}

export default Theme
