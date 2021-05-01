import React, { FC } from 'react'
import { LinkingOptions, NavigationContainer } from '@react-navigation/native'

import { useTheme } from '@emotion/react'

const Navigation: FC<{ linking?: LinkingOptions }> = ({ children, linking }) => {
  const theme = useTheme()

  return (
    <NavigationContainer theme={theme.navigation} linking={linking}>
      {children}
    </NavigationContainer>
  )
}

export default Navigation
