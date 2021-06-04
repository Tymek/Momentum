import { Platform } from 'react-native'
import Constants from 'expo-constants'

const { manifest, appOwnership } = Constants
const isExpo = appOwnership === 'expo'
const hostUri =
  typeof manifest?.packagerOpts === 'object' && manifest?.packagerOpts?.dev
    ? `${manifest?.debuggerHost?.split(':').shift()}:3000`
    : 'localhost:3000'
const apiUrl = manifest?.extra?.apiUrl || `http://${hostUri}/graphql`

/**
 * @see https://docs.expo.io/guides/environment-variables/#using-a-dotenv-file
 **/
const config = {
  ...manifest.extra,
  apiUrl: process.env.API_URL || apiUrl,
  mapboxToken:
    process.env.MAPBOX_TOKEN ||
    'pk.eyJ1IjoidHltZWsiLCJhIjoiY2tvemR4NWk1MGVtNTJ2bXJjbGN1ZzU3aiJ9.jGLv6hoj8cTTshd3kesxlw',
  isExpo,
  isWeb: Platform.OS === 'web',
}

export default config
