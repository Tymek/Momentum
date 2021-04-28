import 'dotenv/config'
import { ExpoConfig, ConfigContext } from '@expo/config'
import packageConfig from './package.json'

export default ({ config }: ConfigContext): ExpoConfig => ({
  slug: 'momentum',
  name: 'Momentum',
  ...config,
  version: packageConfig.version,
  extra: {
    apiUrl: process.env.API_URL || 'http://localhost:8080/graphql',
  },
})
