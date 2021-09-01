module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'filenames',
    '@typescript-eslint',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es2021: true,
  },
  globals: {
    shallow: true,
    mount: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/member-delimiter-style': [1, {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
    '@typescript-eslint/no-unused-vars': ['warn', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false,
      varsIgnorePattern: '^React$|^_$',
    }],
    curly: [1, 'all'],
    'brace-style': [1, '1tbs', { allowSingleLine: true }],
    'import/extensions': 'off',
    'no-mixed-operators': 'off',
    'react/jsx-uses-react': [1],
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-fragments': 'off',
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'react/sort-comp': [1, {
      order: [
        'static-variables',
        'static-methods',
        'instance-variables',
        'lifecycle',
        'everything-else',
        'render',
      ],
    }],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    ],
  },
};
