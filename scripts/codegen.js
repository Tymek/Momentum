// @see https://hasura.io/learn/graphql/typescript-react-apollo/codegen/
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
  documents: ['./src/**/*.gql'],
  overwrite: true,
  generates: {
    './src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        apolloReactHooksImportFrom: '@apollo/client',
      },
    },
    './graphql.schema.json': {
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
