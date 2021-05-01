import React, { FC } from 'react'
import { StatusBar } from 'react-native'

import { useTheme } from '@emotion/react'

const CustomStatusBar: FC = () => {
  const {
    statusBar: { darkText, backgroundColor },
  } = useTheme()
  return (
    <StatusBar
      translucent
      backgroundColor={backgroundColor}
      barStyle={darkText ? 'dark-content' : 'light-content'}
      // animated
      // showHideTransition={statusBarTransition}
      // hidden={hidden}
    />
  )
}

export default CustomStatusBar
