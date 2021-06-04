import type MapboxType from '@react-native-mapbox-gl/maps'
import { useEffect, useState } from 'react'
import config from 'utils/config'

type Instance = typeof MapboxType
type StateType = null | undefined | Instance

const useNativeMapbox = (): StateType => {
  const [state, setState] = useState<StateType>()

  useEffect(() => {
    if (config.isExpo) {
      setState(null)
    } else {
      // https://docs.expo.io/bare/using-expo-client/#use-conditional-inline-requires-to-provide-fallbacks
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const Mapbox = require('@react-native-mapbox-gl/maps').default as Instance
      Mapbox.setAccessToken(config.mapboxToken || null)

      setState(Mapbox)
    }
  }, [setState])

  return state
}

export default useNativeMapbox
