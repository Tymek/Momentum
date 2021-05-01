import React, { FC } from 'react'
import { ApolloProvider } from '@apollo/client'
import client from './client'

const Provider: FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default Provider
