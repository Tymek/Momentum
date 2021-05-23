import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Rules from './screens/Rules'

const Stack = createStackNavigator()

const Informations: FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="regulamin" component={Rules} options={{ title: 'Regulamin' }} />
  </Stack.Navigator>
)

export default Informations
