module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'mjs': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'comma-dangle': ['error', 'never'],
    'no-unused-expressions': ['error', { 'allowShortCircuit': true }],
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'no-param-reassign': ['error', { "props": false }]
  }
}
