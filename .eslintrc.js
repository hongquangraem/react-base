module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'no-console': 1,
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'react/jsx-props-no-spreading': 0,
    'react/jsx-fragments': 0,
    'import/no-unresolved': 0,
    'no-unused-vars': 1,
  },
}
