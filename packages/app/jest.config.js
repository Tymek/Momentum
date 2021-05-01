const path = require('path')

module.exports = {
  name: 'app',
  displayName: 'app',
  preset: 'jest-expo',
  // modulePaths: ['/shared/vendor/modules'],
  // moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: [path.resolve(__dirname, 'node_modules')],
  // rootDir: './',
  // transformIgnorePatterns: [
  //   'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  // ],
  // transform: {
  //   '\\.js$': ['babel-jest', { cwd: __dirname }],
  // },
  // moduleNameMapper: {
  //   react: '<rootDir>/node_modules/react',
  // '^config$': '<rootDir>/configs/app-config.js',

  // '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  // '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  // },
}
