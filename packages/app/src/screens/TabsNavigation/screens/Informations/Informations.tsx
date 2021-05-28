import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Link } from '@react-navigation/native'
import TextPage from 'components/TextPage'
import Text from 'components/Text'

import Rules from './screens/Rules'
import About from './screens/About'
import Speakers from './screens/Speakers'

export const screens = {
  InfoScreen: 'dodatkowe-informacje',
  About: 'o-aplikacji',
  Speakers: 'mówca/:id',
  Rules: 'regulamin',
}

const Stack = createStackNavigator<Record<keyof typeof screens, undefined>>()

const InformationsScreen: FC = () => (
  <TextPage>
    <Link to="/info/o-aplikacji">
      <Text>O aplikacji</Text>
    </Link>
    <Link to="/info/regulamin">
      <Text>Regulamin</Text>
    </Link>
    <Link to="/info/mówcy">
      <Text>Mówcy</Text>
    </Link>
  </TextPage>
)

const Informations: FC = () => (
  <Stack.Navigator initialRouteName="InfoScreen">
    <Stack.Screen
      name="InfoScreen"
      component={InformationsScreen}
      options={{ title: 'Informacje' }}
    />
    <Stack.Screen name="About" component={About} options={{ title: 'O aplikacji' }} />
    <Stack.Screen name="Speakers" component={Speakers} options={{ title: 'Mówcy' }} />
    <Stack.Screen name="Rules" component={Rules} options={{ title: 'Regulamin' }} />
  </Stack.Navigator>
)

export default Informations
