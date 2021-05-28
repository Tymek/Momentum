import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
// import MapboxGL from '@react-native-mapbox-gl/maps'

// import config from 'utils/config'

// MapboxGL.setAccessToken(config?.mapboxToken)

const Map: FC = () => (
  <View style={styles.page}>
    <View style={styles.container}>{/* <MapboxGL.MapView style={styles.map} /> */}</View>
  </View>
)

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
})

export default Map
