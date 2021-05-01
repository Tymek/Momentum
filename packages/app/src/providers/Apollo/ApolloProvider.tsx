import React, { FC } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import config from 'utils/config'

const client = new ApolloClient({
  uri: config.apiUrl,
  cache: new InMemoryCache(),
})

const Apollo: FC = ({ children }) => <ApolloProvider client={client}>{children}</ApolloProvider>

export default Apollo
