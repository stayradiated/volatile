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
  documents: ['./src/**/*.ts'],
  overwrite: true,
  generates: {
    './src/types.graphql.ts': {
      plugins: ['typescript'],
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
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.graphql.ts',
        baseTypesPath: './types.graphql.ts',
      },
      plugins: ['typescript-operations'],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
