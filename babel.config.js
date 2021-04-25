module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            containers: './src/containers',
            hooks: './src/hooks',
            providers: './src/providers',
            utils: './src/utils',
          },
        },
      ],
    ],
  }
}
