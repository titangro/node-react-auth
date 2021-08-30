const path = require('path');

module.exports =  {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'filenames'
    ],
    env: {
        browser: true,
        node: true,
        jest: true
    },
    globals: {
        shallow: true,
        mount: true
    },
    extends: [
        'airbnb',
        'rules/eslint-airbnb-fix',
        'rules/eslint-base',
        'rules/eslint-react'
    ],
    rules : {
        'no-unused-vars': 'off',
        '@typescript-eslint/member-delimiter-style': [1, {
            "multiline": {
                "delimiter": "semi",
                "requireLast": true
            },
            "singleline": {
                "delimiter": "comma",
                "requireLast": false
            }
        }],
        '@typescript-eslint/no-unused-vars': ['warn', {
            'vars': 'all',
            'args': 'after-used',
            'ignoreRestSiblings': false,
            'varsIgnorePattern': '^React$|^_$'
        }],
        'curly': [1, 'all'],
        'brace-style': [1, "1tbs", { "allowSingleLine": true }],
        'import/extensions': 'off',
        'filenames/match-regex': [2, "^[a-z\-]+$", true],
        'no-mixed-operators': 'off',
        'react/jsx-uses-react': [1],
        'react/jsx-props-no-spreading': 'off',
        'react/static-property-placement': 'off',
        'react/state-in-constructor': 'off',
        'react/jsx-fragments': 'off',
        'padding-line-between-statements': [
            "warn",
            { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
            { "blankLine": "any",    "prev": ["const", "let", "var"], "next": ["const", "let", "var"] }
        ],
        'react/sort-comp': [1, {
            order: [
                'static-variables',
                'static-methods',
                'instance-variables',
                'lifecycle',
                'everything-else',
                'render'
            ]
        }],
        'react/jsx-filename-extension': [
            "error",
            {
              "extensions": [
                ".js",
                ".jsx",
                ".ts",
                ".tsx"
              ]
            }
          ],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'react/prop-types': 'off',
                'no-multi-spaces': 'off'
            }
        }
    ],
    settings: {
        'import/resolver': {
            webpack: {
                config: path.join(__dirname, 'webpack/index.js'),
                env: {
                    NODE_ENV: 'development'
                },
                extensions: ['.js', '.pcss', '.ts', '.tsx', '.jsx', '.json']
            },
            alias: {
               extensions: ['.js', '.pcss', '.ts', '.tsx', '.jsx', '.json']
            },
            jest: {
                jestConfigFile: './jest.config.js'
            }
        }
    }
};
