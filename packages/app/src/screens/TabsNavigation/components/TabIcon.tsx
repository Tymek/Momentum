import React, { ComponentProps, FC } from 'react'
import { Ionicons } from '@expo/vector-icons'

/**
 * @see https://icons.expo.fyi
 * @see https://ionic.io/ionicons
 */
const TabIcon: FC<{
  name: ComponentProps<typeof Ionicons>['name']
  color: string
}> = (props) => <Ionicons size={30} {...props} />

export default TabIcon
