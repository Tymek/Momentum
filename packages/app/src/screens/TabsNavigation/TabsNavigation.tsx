/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { useTheme } from '@emotion/react'
import Map from './screens/Map'
import ScheduleScreen, { screens as scheduleScreens } from './screens/Schedule'
import NotificationsScreen from './screens/Notifications'
import InformationsScreen, {
  screens as infoScreens,
} from 'screens/TabsNavigation/screens/Informations'
import TabIcon from './components/TabIcon'
import useNewNotificationsCount from 'hooks/useNewNotificationsCount'

export const screens = {
  Schedule: {
    path: 'plan',
    screens: scheduleScreens,
  },
  Notifications: 'powiadomienia',
  Info: {
    path: 'info',
    screens: infoScreens,
  },
  Map: 'mapa',
}

const BottomTab = createBottomTabNavigator<Record<keyof typeof screens, undefined>>()

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
  const [unreadNotifications] = useNewNotificationsCount()

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
      backBehavior="initialRoute"
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
        component={NotificationsScreen}
        options={{
          tabBarIcon: NotificationIcon,
          title: 'Powiadomienia',
          tabBarBadge: unreadNotifications ? `${unreadNotifications}` : undefined,
          tabBarBadgeStyle: { backgroundColor: theme.color.accent },
        }}
      />
      <BottomTab.Screen
        name="Info"
        component={InformationsScreen}
        options={{
          tabBarIcon: InfoIcon,
          title: 'Informacje',
          unmountOnBlur: true,
        }}
        listeners={({ navigation }) => ({
          // Issue with `unmountOnBlur`: https://git.io/JGOxL
          blur: () => navigation.setParams({ screen: undefined }),
        })}
      />
      <BottomTab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: MapIcon,
          title: 'Mapa',
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator
