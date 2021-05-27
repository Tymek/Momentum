import 'dotenv/config'
import { ExpoConfig, ConfigContext } from '@expo/config'
import Constants from 'expo-constants'

import appJson from './app.json'

const { manifest } = Constants
const apiUrl =
  typeof manifest?.packagerOpts === 'object' && manifest?.packagerOpts?.dev
    ? `${manifest?.debuggerHost?.split(':').shift()}:3000/graphql`
    : 'http://localhost:3000/graphql'

export default ({ config }: ConfigContext): ExpoConfig => ({
  slug: appJson.expo.slug,
  name: appJson.expo.name,
  ...config,
  extra: {
    version: appJson.expo.version,
    buildProfile: process.env.EAS_BUILD_PROFILE || 'dev',
    buildHash: process.env.EAS_BUILD_GIT_COMMIT_HASH,
    apiUrl: process.env.API_URL || apiUrl,
  },
})
