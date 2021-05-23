module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    sourceMaps: 'both',
    plugins: [
      [
        '@emotion',
        {
          sourceMap: true,
          // autoLabel: 'dev-only',
          // labelFormat: '[local]',
          // cssPropOptimization: false,
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            config: './src/config',
            assets: './src/assets',
            components: './src/components',
            containers: './src/containers',
            hooks: './src/hooks',
            screens: './src/screens',
            providers: './src/providers',
            utils: './src/utils',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
