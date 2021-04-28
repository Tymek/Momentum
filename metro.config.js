const blacklist = require('metro-config/src/defaults/blacklist')
const path = require('path')

const ignoreTopLevelFolders = ['data'].map((f) => new RegExp(`${path.resolve(f)}/.*`))

module.exports = {
  resolver: {
    blacklistRE: blacklist(ignoreTopLevelFolders),
  },
}
