module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    '@typescript-eslint',
    'import-helpers',
  ],
  rules: {
    'object-curly-newline': 'off',
    'comma-dangle': 'off',
    'arrow-parens': 'off',
    'prettier/prettier': 'error',
    'global-require': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'implicit-arrow-linebreak': 'off', // temporary
    'operator-linebreak': 'off', // temporary
    'no-unused-expressions': 'off', // temporary
    '@typescript-eslint/no-unused-expressions': 'error', // temporary
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^(react|styled-components)/',
          'module',
          '/^@/components/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/extensions': ['js', 'jsx', '.ts', '.tsx'],
    'import/resolver': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
