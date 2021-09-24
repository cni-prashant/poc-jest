module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    amd: true,
    mocha: true
  },
  extends: ['eslint:recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['mocha'],
  rules: {
    'require-atomic-updates': 'off',
    'mocha/no-exclusive-tests': 'error'
  }
};
