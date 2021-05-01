const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)

  // Remove existing rules about SVG and inject our own
  // (Inspired by https://git.io/J3cwi)
  config.module.rules = config.module.rules.map((rule) => {
    if (rule.oneOf) {
      let hasModified = false

      const newRule = {
        ...rule,
        oneOf: rule.oneOf.map((oneOfRule) => {
          if (oneOfRule.test && oneOfRule.test.toString().includes('svg')) {
            hasModified = true
            const test = oneOfRule.test.toString().replace('|svg', '')
            return { ...oneOfRule, test: new RegExp(test) }
          } else {
            return oneOfRule
          }
        }),
      }

      // Add new rule to use svgr
      // Place at the beginning so that the default loader doesn't catch it
      // https://git.io/J3cwu
      if (hasModified) {
        newRule.oneOf.unshift({
          test: /\.svg$/,
          exclude: /node_modules/,
          use: [
            {
              loader: '@svgr/webpack',
              options: require('./.svgrrc.js'),
            },
          ],
        })
      }

      return newRule
    } else {
      return rule
    }
  })

  return config
}
