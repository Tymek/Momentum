module.exports = {
  client: {
    includes: ['./src/**/*.{js,jsx,ts,tsx,gql,graphql}'],
    service: {
      name: 'momentum',
      url: 'http://localhost:8080/v1/graphql',
      headers: {
        'x-hasura-admin-secret': 'admin',
      },
      skipSSLValidation: true,
    },
  },
}
