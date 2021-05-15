import { LinkingOptions, PathConfigMap } from '@react-navigation/native'
import * as Linking from 'expo-linking'

export const config = {
  screens: {
    Root: {
      screens: {
        Schedule: {
          path: 'plan',
          screens: {
            Day: ':id',
          },
        },
        Notifications: 'powiadomienia',
        Info: {
          path: 'info',
          screens: {
            InfoScreen: 'info',
            SpeakerScreen: 'mówca/:id',
          },
        },
        Map: 'mapa',
      },
    },
    NotFound: '*',
  },
}

/**
 * Deep linking with React Navigation
 * @see https://reactnavigation.org/docs/deep-linking
 * @see https://reactnavigation.org/docs/configuring-links
 */
const routes: LinkingOptions = {
  prefixes: [Linking.makeUrl('/')],
  config,
}

export type Routing = PathConfigMap

export type ScreenList<T extends keyof Routing = keyof typeof config['screens']> = Record<
  T,
  undefined
>

export default routes
