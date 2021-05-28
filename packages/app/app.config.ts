import 'dotenv/config'
import { ExpoConfig, ConfigContext } from '@expo/config'

import appJson from './app.json'

export default ({ config }: ConfigContext): ExpoConfig => ({
  slug: appJson.expo.slug,
  name: appJson.expo.name,
  ...config,
  extra: {
    version: appJson.expo.version,
    buildProfile: process.env.EAS_BUILD_PROFILE || 'dev',
    buildHash: process.env.EAS_BUILD_GIT_COMMIT_HASH,
    apiUrl: process.env.API_URL,
    mapboxToken: process.env.MAPBOX_API_KEY,
  },
})
