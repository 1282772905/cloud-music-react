module.exports = {
  root: true,
  extends: [
    // 'eslint:recommend',
    'plugin:react/jsx-runtime',
  ],
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    indent: ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
  },
}