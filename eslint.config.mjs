import globals from 'globals';

export default [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.es6,
        ...globals.node
      }
    },
    rules: {
      'no-dupe-else-if': 'error',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  }
];
