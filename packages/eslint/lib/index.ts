import styledNoPartialInterpolation from './rules/styled-no-partial-interpolation'

const plugin = {
  rules: {
    'styled-no-partial-interpolation': styledNoPartialInterpolation,
  },
  configs: {
    rules: {
      plugins: ['@-local/eslint-plugin'],
      rules: {
        '@-local/styled-no-partial-interpolation': 'error',
      },
    },
  },
}

export default plugin
