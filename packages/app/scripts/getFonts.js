const http = require('http')
const fs = require('fs')
const path = require('path')

const download = (url, dest) =>
  new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    http
      .get(url, (response) => {
        response.pipe(file)
        file.on('finish', () => {
          file.close(resolve)
        })
      })
      .on('error', (err) => {
        fs.unlink(dest)
        reject(err.message)
      })
  })

const fontSource = 'http://konferencjamomentum.pl/webfonts'
const fontDestination = './src/assets/fonts'
const fontStatic = './web/fonts'

const fonts = ['ProximaNova-Regular', 'ProximaNova-Light', 'ProximaNova-Black']
const extensions = ['eot', 'woff2', 'woff', 'ttf', 'svg']

const getFonts = async () => {
  console.log('Downloading fonts')
  for (let font of fonts) {
    for (let extension of extensions) {
      const url = `${fontSource}/${font}.${extension}`
      const target = path.resolve(`${fontDestination}/${font}.${extension}`)
      if (!fs.existsSync(target)) {
        await download(url, target)
        await download(url, path.resolve(`${fontStatic}/${font}.${extension}`))
        console.log(' ', font, extension)
      }
    }
  }
}

getFonts()
