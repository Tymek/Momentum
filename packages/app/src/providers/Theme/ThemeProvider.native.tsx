import React, { FC } from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { ThemeProvider } from '@emotion/react'
import useColorSchemeTheme from './hooks/useColorSchemeTheme'

const Theme: FC = ({ children }) => {
  const [fontsLoaded] = useFonts({
    'Maven Pro': require('assets/fonts/MavenPro-Black.ttf'),
    Lato: require('assets/fonts/Lato.ttf'),
    'Lato-Bold': require('assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('assets/fonts/Lato-Light.ttf'),
    'Lato-Italic': require('assets/fonts/Lato-Italic.ttf'),
  })
  const theme = useColorSchemeTheme()

  return <ThemeProvider theme={theme}>{fontsLoaded ? children : <AppLoading />}</ThemeProvider>
}

export default Theme
