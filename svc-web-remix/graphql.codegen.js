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
  documents: ['./app/graphql/*.graphql'],
  overwrite: true,
  generates: {
    './app/graphql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
    }
  },
}
