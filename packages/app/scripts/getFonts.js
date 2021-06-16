const fs = require('fs')
const path = require('path')

const fontAssets = './src/assets/fonts'
const fontStatic = './web/fonts'

const fonts = ['MavenPro-Black', 'Lato-Regular', 'Lato-Light', 'Lato-Bold', 'Lato-Italic']
const extensions = ['woff2', 'woff', 'ttf']

const getFonts = async () => {
  console.log('Copying fonts')
  for (let font of fonts) {
    for (let extension of extensions) {
      // eslint-disable-next-line node/no-unsupported-features/node-builtins
      fs.copyFileSync(
        path.resolve(`${fontAssets}/${font}.${extension}`),
        path.resolve(`${fontStatic}/${font}.${extension}`),
      )
      console.log(' ', font, extension)
    }
  }
}

getFonts()
