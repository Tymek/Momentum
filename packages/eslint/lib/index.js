/**
 * @see https://adevnadia.medium.com/custom-eslint-rules-typescript-monorepo-%EF%B8%8F-1c4596721e9f
 */
'use strict'

const { compilerOptions } = require('../tsconfig.json')

require('ts-node').register({
  compilerOptions,
})

const index = require('./index.ts').default

module.exports = index
