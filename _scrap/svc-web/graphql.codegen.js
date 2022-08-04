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
  documents: ['./src/**/*.tsx', './src/**/*.ts'],
  overwrite: true,
  generates: {
    './src/utils/graphql.ts': {
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
