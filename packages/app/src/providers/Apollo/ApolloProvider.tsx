import React, { FC, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AsyncStorageWrapper, persistCache } from 'apollo3-cache-persist'
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client'
import localSchema from '@-local/db/local.graphql'
import cache from 'utils/cache'
import config from 'utils/config'
import { FullLoader as Loader } from 'components/Loader'

export const typeDefs = localSchema

const Apollo: FC = ({ children }) => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>()

  useEffect(() => {
    async function init() {
      await persistCache({
        cache,
        storage: new AsyncStorageWrapper(AsyncStorage),
      })

      setClient(
        new ApolloClient({
          uri: config.apiUrl,
          cache,
          typeDefs,
        }),
      )
    }

    init().catch((error) => {
      console.error(error)

      setClient(
        new ApolloClient({
          uri: config.apiUrl,
          cache,
          typeDefs,
        }),
      )
    })
  }, [])

  if (!client) {
    return <Loader />
  }

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default Apollo
