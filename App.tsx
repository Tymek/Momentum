import React, { FC } from 'react'
import { useColorScheme } from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import screens from 'utils/routes'
import ThemeProvider from 'providers/Theme'
import HomeScreen from 'containers/Home'
import RulesScreen from 'containers/Rules'

const Stack = createStackNavigator()

const App: FC = () => {
  const scheme = useColorScheme()

  return (
    <ThemeProvider>
      <NavigationContainer
        theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
        linking={{
          prefixes: ['https://momentum.vercel.app', 'momentum2021konf://'],
          config: {
            screens,
          },
        }}
      >
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Momentum' }} />
          <Stack.Screen name="Rules" component={RulesScreen} options={{ title: 'Regulamin' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
