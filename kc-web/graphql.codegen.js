module.exports = {
  schema: [
    {
      'http://localhost:9999/v1/graphql': {
        headers: {
          'X-Hasura-Admin-Secret': 'unlockedinfinity',
          'X-Hasura-Role': 'user',
        },
      },
    },
  ],
  documents: [
    './pages/**/*.tsx',
    './pages/**/*.ts',
    './components/**/*.tsx',
    './components/**/*.ts',
    './hooks/**/*.tsx',
    './hooks/**/*.ts',
    './utils/**/*.tsx',
    './utils/**/*.ts',
  ],
  overwrite: true,
  generates: {
    './utils/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: false,
        withHOC: false,
        withComponent: false,

        strictScalars: true,
        scalars: {
          bpchar: 'string',
          jsonb: 'unknown',
          numeric: 'number',
          timestamp: 'string',
          timestamptz: 'string',
          uuid: 'string',
        },
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
