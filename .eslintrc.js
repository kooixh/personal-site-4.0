module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['prettier'],
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'react-hooks'],
  ignorePatterns: ['node_modules/'],
  rules: {
    curly: 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-nested-ternary': 1,
    'no-plusplus': 'off',
    semi: [2, 'never'],
    'react/prop-types': 'off',
    'react/display-name': 'off',
  },
  settings: {
    react: {
      version: 'latest', // "detect" automatically picks the version you have installed.
    },
  },
}
