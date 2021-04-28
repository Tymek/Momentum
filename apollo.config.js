module.exports = {
  client: {
    includes: ['./src/**/*.{js,jsx,ts,tsx,gql,graphql}'],
    excludes: ['./src/generated/**/*'],
    service: {
      name: 'momentum',
      localSchemaFile: './graphql.schema.json',
      // url: 'http://localhost:8080/v1/graphql',
      // headers: {
      //   'x-hasura-admin-secret': 'admin',
      // },
      // skipSSLValidation: true,
    },
  },
}
