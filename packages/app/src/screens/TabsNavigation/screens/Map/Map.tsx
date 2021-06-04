import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import useDarkTheme from 'hooks/useDarkTheme'
import Text from 'components/Text'
import useNativeMapbox from './hooks/useNativeMapbox'
import mapConfig from './config'

const Map: FC = () => {
  const Mapbox = useNativeMapbox()
  const isDark = useDarkTheme()

  if (Mapbox === undefined) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )
  }

  if (Mapbox === null) {
    return (
      <View
        style={[
          {
            backgroundColor: '#8e8e8e',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          },
        ]}
      >
        <Text style={{ fontSize: 64 }}>🗺</Text>
        <Text>Mapbox not available in Expo</Text>
      </View>
    )
  }

  return (
    <View style={styles.page} key={Math.random()}>
      <Mapbox.MapView
        style={styles.map}
        // logoEnabled={false}
        styleURL={isDark ? mapConfig.darkStyleUrl : mapConfig.styleUrl}
        compassEnabled
        compassViewMargins={{ x: 20, y: 45 }}
      >
        <Mapbox.Camera
          defaultSettings={{
            centerCoordinate: mapConfig.center,
            zoomLevel: mapConfig.zoom,
            pitch: mapConfig.pitch,
            heading: mapConfig.heading,
          }}
        />
        <Mapbox.MarkerView id="HalaMillenium" coordinate={[15.5663644, 54.1748946]}>
          <View style={{ width: 30 }}>
            <Ionicons size={30} name="flag-sharp" />
          </View>
        </Mapbox.MarkerView>
        <Mapbox.MarkerView id="Plaża" coordinate={[15.5375416, 54.1791502]}>
          <View style={{ width: 30 }}>
            <Ionicons size={30} name="musical-notes-sharp" />
          </View>
        </Mapbox.MarkerView>
      </Mapbox.MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
})

export default Map
