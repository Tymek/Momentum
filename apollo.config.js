module.exports = {
  configDirURI: './packages',
  client: {
    includes: ['./packages/*/src/*.{js,jsx,ts,tsx,gql,graphql}'],
    excludes: [
      './data',
      '**/node_modules/**/*',
      './node_modules/**/*',
      './packages/*/node_modules/**/*',
      './packages/admin/.next',
      './packages/admin/out',
      './packages/app/web-build',
      './packages/backend/dist',
      './packages/database/generated',
    ],
    service: {
      name: 'momentum',
      localSchemaFile: './packages/database/schema.json',
      // url: 'http://localhost:8080/v1/graphql',
      // headers: {
      //   'x-hasura-admin-secret': 'admin',
      // },
      // skipSSLValidation: true,
    },
  },
}
