import { InMemoryCache, makeVar } from '@apollo/client'
import { Notification } from '@-local/db/lib/types'
import { TypedTypePolicies } from '@-local/db/lib/helpers'

// eslint-disable-next-line unicorn/no-useless-undefined
export const isDarkThemeVar = makeVar<boolean | undefined>(undefined)
export const readNotificationsVar = makeVar<string[]>([])

const typePolicies: TypedTypePolicies = {
  notification: {
    fields: {
      isRead: {
        read(_, { readField }) {
          const id = readField('id') as Notification['id']

          return readNotificationsVar().includes(id)
        },
      },
    },
  },
  query_root: {
    fields: {
      isDarkTheme: {
        read() {
          return undefined // TODO: settings toggle dark theme
        },
      },
    },
  },
}

const cache: InMemoryCache = new InMemoryCache({
  typePolicies,
})

export default cache
