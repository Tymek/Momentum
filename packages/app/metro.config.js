const fs = require('fs')
const path = require('path')

function listDirectoryContents(directory) {
  try {
    return fs.readdirSync(directory)
  } catch (error) {
    if (error.code === 'ENOENT') {
      return []
    }
    throw error
  }
}

/**
 * Originally for dealing with only symlinked packages, but I found that providing paths to all packages works
 * @see https://github.com/expo/expo/blob/a3e550a1b64bff662500880a99918429d0f06b31/packages/expo-yarn-workspaces/common/get-symlinked-modules.js
 */
function getNodeModulesForDirectory(packagePath) {
  const nodeModulesPath = path.join(packagePath, 'node_modules')
  const directories = listDirectoryContents(nodeModulesPath)

  const modules = {}
  for (const directory of directories) {
    // The directory is either a scope or a package
    if (directory.startsWith('@')) {
      const scopePath = path.join(nodeModulesPath, directory)
      const scopedPackageDirectories = fs.readdirSync(scopePath)
      for (const subdirectory of scopedPackageDirectories) {
        const dependencyName = `${directory}/${subdirectory}`
        const dependencyPath = path.join(scopePath, subdirectory)
        // if (fs.lstatSync(dependencyPath).isSymbolicLink()) {
        modules[dependencyName] = fs.realpathSync(dependencyPath)
        // }
      }
    } else {
      const dependencyName = directory
      const dependencyPath = path.join(nodeModulesPath, directory)
      // if (fs.lstatSync(dependencyPath).isSymbolicLink()) {
      modules[dependencyName] = fs.realpathSync(dependencyPath)
      // }
    }
  }
  return modules
}

const projectRoot = path.resolve(__dirname)

module.exports = {
  projectRoot,
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
      '@-local/db': path.resolve(__dirname, '..', 'database'),
      ...getNodeModulesForDirectory(projectRoot),
      ...getNodeModulesForDirectory(path.resolve(__dirname, '..', 'database')),
    },
    providesModuleNodeModules: [],
  },
  watchFolders: [
    path.resolve(__dirname, 'node_modules'),
    path.resolve(__dirname, '..', 'database'),
  ],
}
