import React, { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ThemeProvider from 'providers/Theme'
import Navigation from 'containers/navigation'

const App: FC = () => (
  <ThemeProvider>
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  </ThemeProvider>
)

export default App
