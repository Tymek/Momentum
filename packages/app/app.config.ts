import 'dotenv/config'
import { ExpoConfig, ConfigContext } from '@expo/config'
import appJson from './app.json'

export default ({ config }: ConfigContext): ExpoConfig => ({
  slug: appJson.expo.slug,
  name: appJson.expo.name,
  ...config,
  extra: {
    apiUrl: process.env.API_URL || 'http://localhost:3000/graphql',
  },
})
