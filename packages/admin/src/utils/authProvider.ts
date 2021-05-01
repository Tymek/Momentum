/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthProvider } from 'ra-core'
import { ApolloClient } from '@apollo/client'

// import { Mutation_RootLoginArgs } from 'ts/schema'

import LOGIN from 'gql/login.gql'
import ME from 'gql/me.gql'
import LOGOUT from 'gql/logout.gql'

const authProvider = ({ client }: { client: ApolloClient<any> }): AuthProvider => {
  let permissions: boolean | undefined

  const login = async (variables /*: Mutation_RootLoginArgs */) => {
    const { data } = await client.mutate({
      mutation: LOGIN,
      variables,
    })

    permissions = data
  }

  const logout = async (params: any) => {
    try {
      await client.mutate({
        mutation: LOGOUT,
      })
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('logout', params, error) // eslint-disable-line no-console
      }
    }

    permissions = false

    return Promise.resolve()
  }

  const checkError = async (error?: any) => {
    const { data, errors } = await client.query({
      query: ME,
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    })

    permissions = data

    if (errors) {
      return Promise.reject(error)
    }

    return Promise.resolve(error)
  }

  const checkAuth = () => {
    if (permissions) {
      return Promise.resolve()
    }

    if (permissions === undefined) {
      return checkError()
    }

    return Promise.reject()
  }

  const getPermissions = () => {
    if (permissions) {
      return Promise.resolve(permissions)
    }

    return Promise.reject()
  }

  return {
    login,
    logout,
    checkAuth,
    checkError,
    getPermissions,
  }
}

export default authProvider
