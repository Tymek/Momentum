import React, { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ThemeProvider from 'providers/Theme'
import ApolloProvider from 'providers/Apollo'
import Navigation from 'containers/navigation'

const App: FC = () => (
  <ApolloProvider>
    <ThemeProvider>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </ThemeProvider>
  </ApolloProvider>
)

export default App
