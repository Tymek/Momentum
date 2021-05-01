import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from '@emotion/react'

import linking, { ScreenList } from 'config/routes'
import NotFoundScreen from 'screens/NotFound'
import TabNavigation from './TabNavigation'

/** Root stack navigator for displaying modals on top of all other content
 * @see: https://reactnavigation.org/docs/modal
 */
const Stack = createStackNavigator<ScreenList>()

const Navigation: FC = () => {
  const theme = useTheme()

  return (
    <NavigationContainer linking={linking} theme={theme.navigation}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={TabNavigation} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Uups!' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
