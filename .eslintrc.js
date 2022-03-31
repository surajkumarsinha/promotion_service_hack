module.exports = {
  env: {
    commonjs: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:node/recommended'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'warn',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    camelcase: 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: 'next' }],
    'comma-dangle': ['off'],
    'no-var': ['off'],
    'one-var': ['off'],
    'func-name': ['off'],
    'no-use-before-define': ['off'],
    'consistent-return': ['off'],
    'node/no-unpublished-require': ['error', { devDependencies: true }],
  },
};
