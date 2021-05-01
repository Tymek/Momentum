import * as Linking from 'expo-linking'

export const config = {
  screens: {
    Root: {
      screens: {
        Schedule: 'plan',
        Notifications: 'powiadomienia',
        Info: {
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
const routes = {
  prefixes: [Linking.makeUrl('/')],
  config,
}

export type Routing = typeof config['screens']

export type ScreenList<T extends string = keyof Routing> = Record<T, undefined>

export default routes
