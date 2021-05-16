module.exports = {
  extends: ['plugin:jest/all', 'scrlk'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'unicorn/prefer-node-protocol': 'off', // Node >=16 only
    'node/no-unsupported-features': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',
    'unicorn/new-for-builtins': 'off',
  },
  ignorePatterns: [
    'node_modules',
    'packages/**/node_modules',
    'tmp',
    'data',
    '**/generated',
    'packages/app/web-build',
    'packages/admin/out',
    'packages/admin/.next',
    'packages/backend/data',
    'packages/backend/dist',
    'packages/database/lib',
  ],
  overrides: [
    {
      files: [
        '*.test.js',
        '*.test.jsx',
        '*.test.ts',
        '*.test.tsx',
        'next.config.js',
        'webpack.config.js',
        'metro.config.js',
      ],
      rules: {
        'node/no-unpublished-import': 'off',
        'node/no-unpublished-require': 'off',
      },
    },
  ],
}
