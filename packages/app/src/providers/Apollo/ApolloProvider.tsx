import React, { FC } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistCacheSync, AsyncStorageWrapper } from 'apollo3-cache-persist'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import localSchema from '@-local/db/local.graphql'
import cache from 'utils/cache'

import config from 'utils/config'

export const typeDefs = localSchema

// TODO: improve to async?
persistCacheSync({
  cache,
  storage: new AsyncStorageWrapper(AsyncStorage),
})

const client = new ApolloClient({
  uri: config.apiUrl,
  cache,
  typeDefs,
})

const Apollo: FC = ({ children }) => <ApolloProvider client={client}>{children}</ApolloProvider>

export default Apollo
