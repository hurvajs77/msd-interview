module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: false,
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.js',
      options: {
        parser: 'babel',
      },
    },
    {
      files: '*.json',
      options: {
        parser: 'json',
        singleQuote: false,
        printWidth: 200,
      },
    },
    {
      files: '*.graphql',
      options: {
        parser: 'graphql',
        singleQuote: false,
      },
    },
    {
      files: 'package.json',
      options: {
        parser: 'json',
        singleQuote: false,
        proseWrap: 'never',
        trailingComma: 'none',
      },
    },
    {
      files: '*.css',
      options: {
        parser: 'css',
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
      },
    },
    {
      files: ['*.yml', '*.yaml'],
      options: {
        parser: 'yaml',
      },
    },
  ],
};
