import Constants from 'expo-constants'

const { manifest } = Constants
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
  mapboxToken: process.env.MAPBOX_API_KEY,
}

export default config
