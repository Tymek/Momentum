// const fs = require('fs')
const path = require('path')
const { getDefaultConfig } = require('@expo/metro-config')
const Resolver = require('metro-resolver')

const defaultConfig = getDefaultConfig(__dirname)
const {
  resolver: { sourceExts, assetExts },
} = defaultConfig

const projectRoot = path.resolve(__dirname)

module.exports = {
  projectRoot,
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    // https://github.com/facebook/react/issues/13991#issuecomment-830308729
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => {
          return path.join(__dirname, `node_modules/${name}`)
        },
      },
    ),
    resolveRequest: (context, realModuleName, platform, moduleName) => {
      // Make sure we use the local copy of react and react-native
      const clearContext = { ...context, resolveRequest: undefined }
      const module =
        moduleName === 'react' || moduleName === 'react-native'
          ? path.join(__dirname, 'node_modules', realModuleName)
          : realModuleName
      return Resolver.resolve(clearContext, module, platform)
    },
    providesModuleNodeModules: [],
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
  watchFolders: [
    path.resolve(__dirname, 'node_modules'),
    path.resolve(__dirname, '..', 'database'),
  ],
}
