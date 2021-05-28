import React, { FC, ReactElement } from 'react'
import { Text, View } from 'react-native'
import Constants from 'expo-constants'

let MapView: FC

if (Constants.appOwnership === 'expo') {
  // eslint-disable-next-line react/display-name
  MapView = (): ReactElement => (
    <View
      style={[
        {
          backgroundColor: 'lightblue',
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
    >
      <Text>🗺 (Mapbox not available)</Text>
    </View>
  )
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Mapbox = require('@react-native-mapbox-gl/maps').default
  Mapbox.setAccessToken(Constants.extra.mapboxToken)
  MapView = Mapbox.MapView
}

export default MapView
