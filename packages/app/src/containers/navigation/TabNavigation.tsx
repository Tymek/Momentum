/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { config as routesConfig, ScreenList } from 'config/routes'
import { useTheme } from '@emotion/react'
import TabOneScreen from 'screens/TabOneScreen'
import ScheduleScreen from 'screens/Schedule'
import Notifications from 'screens/Notifications'
import TabIcon from './components/TabIcon'

type RootScreens = typeof routesConfig.screens.Root.screens

const BottomTab = createBottomTabNavigator<ScreenList<keyof RootScreens>>()

const ScheduleIcon: FC<{ color: string }> = ({ color }) => (
  <TabIcon name="calendar-sharp" color={color} />
)
const NotificationIcon: FC<{ color: string }> = ({ color }) => (
  <TabIcon name="notifications-sharp" color={color} />
)
const InfoIcon: FC<{ color: string }> = ({ color }) => (
  <TabIcon name="information-circle-sharp" color={color} />
)
const MapIcon: FC<{ color: string }> = ({ color }) => <TabIcon name="map-sharp" color={color} />

const BottomTabNavigator: FC = () => {
  const theme = useTheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Schedule"
      tabBarOptions={{
        activeTintColor: theme.navigation.colors.primary,
        style: {
          paddingVertical: 3,
          height: 64,
        },
        labelStyle: {
          fontSize: theme.fontSize.s,
          fontFamily: theme.font.default,
        },
        safeAreaInsets: {
          top: theme.spacing.xs,
          bottom: theme.spacing.xs,
        },
      }}
    >
      <BottomTab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarIcon: ScheduleIcon,
          title: 'Plan',
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: NotificationIcon,
          title: 'Powiadomienia',
        }}
      />
      <BottomTab.Screen
        name="Info"
        component={TabOneScreen}
        options={{
          tabBarIcon: InfoIcon,
          title: 'Informacje',
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={TabOneScreen}
        options={{
          tabBarIcon: MapIcon,
          title: 'Mapa',
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator
