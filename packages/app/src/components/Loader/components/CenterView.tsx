import React, { FC } from 'react'
import { View } from 'react-native'

const CenterView: FC = ({ children }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', opacity: 0.333 }}>
      {children}
    </View>
  )
}

export default CenterView
