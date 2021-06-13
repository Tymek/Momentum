/**
 * @see https://hasura.io/learn/graphql/typescript-react-apollo/codegen/
 **/
module.exports = {
  schema: [
    {
      'http://localhost:8080/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': 'admin',
        },
      },
    },
  ],
  overwrite: true,
  generates: {
    './generated/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        skipTypename: false,
        withHooks: false,
        withHOC: false,
        withComponent: false,
      },
    },
    './generated/api.tsx': {
      schema: './local.graphql',
      documents: ['./**/*.gql'],
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: true,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        apolloReactHooksImportFrom: '@apollo/client',
      },
    },
    './generated/helpers.ts': {
      schema: './local.graphql',
      plugins: ['typescript-apollo-client-helpers'],
    },
    './schema.json': {
      plugins: ['introspection'],
    },
  },
  config: {
    scalars: {
      uuid: 'string',
      timestamptz: 'string',
      timestamp: 'string',
    },
  },
}
