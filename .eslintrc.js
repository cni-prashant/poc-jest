module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    node: true,
    jest: true,
    amd: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    project: 'tsconfig.json',
    sourceType: 'module',
    createDefaultProgram: true,
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  ignorePatterns: ['node_modules', 'built'],
};
