const { version } = require('./package.json')

const options = {
  basePath: '/panel',
  poweredByHeader: false,
  serverRuntimeConfig: {
    hasuraActionSecret: process.env.HASURA_ACTION_SECRET,
    analyticsSecret: process.env.ANALYTICS_SECRET,
  },
  webpack(config /*, { isServer } */) {
    const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
    const MomentTimezoneDataPlugin = require('moment-timezone-data-webpack-plugin')
    const { DefinePlugin } = require('webpack')

    config.devtool = process.env.NODE_ENV !== 'production' ? 'eval-source-map' : false

    config.plugins = config.plugins || []
    config.plugins.push(
      new MomentLocalesPlugin({
        localesToKeep: ['en', 'pl'],
      }),
      new MomentTimezoneDataPlugin({
        startYear: 2021,
        matchCountries: ['PL'],
      }),
      new DefinePlugin({
        'process.env.BUILD': JSON.stringify(Date.now()),
        'process.env.VERSION': JSON.stringify(version),
        'process.env.DEBUG': JSON.stringify(process.env.DEBUG), // verbose
      }),
    )

    config.module.rules.push(
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.svg$/,
        issuer: {
          test: /\.[jt]sx?$/,
        },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              titleProp: true,
              ref: true,
              memo: true,
            },
          },
        ],
      },
    )

    return config
  },
}

module.exports =
  process.env.ANALYZE === 'true'
    ? (() => {
        const withBundleAnalyzer = require('@next/bundle-analyzer')({})
        return withBundleAnalyzer(options)
      })()
    : options
