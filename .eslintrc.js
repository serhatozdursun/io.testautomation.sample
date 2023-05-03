const defaultRules = {
  '@typescript-eslint/prefer-ts-expect-error': 'warn',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/restrict-template-expressions': 'warn',
  '@typescript-eslint/no-misused-promises': 'warn',
  '@typescript-eslint/no-extraneous-class': 'warn',
  '@typescript-eslint/strict-boolean-expressions': 'warn'
};
module.exports = {
  env: {
    es2021: true,
    browser: true
  },
  extends: ['standard-with-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json'],
    sourceType: 'module'
  },
  rules: defaultRules,
  ignorePatterns: ['node_modules', './app/**']
};
