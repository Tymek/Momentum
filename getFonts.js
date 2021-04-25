#!/usr/bin/env node
const http = require('http')
const fs = require('fs')
const path = require('path')

const download = (url, dest) =>
  new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    const request = http
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
const fontDestination = './assets/fonts'
const fontStatic = './web/fonts'

const fonts = ['ProximaNova-Regular', 'ProximaNova-Light', 'ProximaNova-Black']
const extensions = ['eot', 'woff2', 'woff', 'ttf', 'svg']

const getFonts = async () => {
  console.log('Downloading fonts')
  for (font of fonts) {
    console.log('\n', font)
    for (extension of extensions) {
      const url = `${fontSource}/${font}.${extension}`
      await download(url, path.resolve(`${fontDestination}/${font}.${extension}`))
      await download(url, path.resolve(`${fontStatic}/${font}.${extension}`))
      console.log('  ', extension)
    }
  }
}

getFonts()
