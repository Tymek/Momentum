import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useTheme } from '@emotion/react'

import NotFoundScreen from 'screens/NotFound'
import TabsNavigation, { screens as tabsScreens } from './TabsNavigation'

export const screens = {
  Root: {
    screens: tabsScreens,
  },
  NotFound: '*',
}

/**
 * Deep linking with React Navigation
 * @see https://reactnavigation.org/docs/deep-linking
 * @see https://reactnavigation.org/docs/configuring-links
 */
const linking: LinkingOptions = {
  prefixes: [Linking.makeUrl('/')],
  config: { screens },
}

/** Root stack navigator for displaying modals on top of all other content
 * @see: https://reactnavigation.org/docs/modal
 */
const Stack = createStackNavigator<Record<keyof typeof screens, undefined>>()

const Navigation: FC = () => {
  const theme = useTheme()

  return (
    <NavigationContainer linking={linking} theme={theme.navigation}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={TabsNavigation} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Uups!' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
