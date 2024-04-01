module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'eqeqeq': 'error',
    'no-empty-function': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'eol-last': ['error', 'always'],
    'semi': ['error', 'never'],
    'react/jsx-curly-spacing': ['error', { 'when': 'always', 'children': true }],
    'react/react-in-jsx-scope': 'off',
  },
}
