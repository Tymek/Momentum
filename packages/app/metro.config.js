const path = require('path')

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules: {
      '@-local/db': path.resolve(__dirname, '..', 'db'),
    },
  },
  watchFolders: [path.resolve(__dirname, '..', 'database')],
}
