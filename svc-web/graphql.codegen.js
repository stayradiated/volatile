const process = require('node:process')

module.exports = {
  schema: [
    {
      [process.env.GRAPHQL_ENDPOINT]: {
        headers: {
          'X-Hasura-Admin-Secret': process.env.GRAPHQL_ADMIN_SECRET,
          'X-Hasura-Allowed-Roles': 'guest,user,superuser,admin',
        },
      },
    },
  ],
  documents: ['./app/**/*.graphql', './app/routes/**/*.tsx'],
  overwrite: true,
  generates: {
    './app/graphql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        scalars: {
          'numeric': 'number',
          'smallint': 'number',
          'timestamp': 'string',
          'timestamptz': 'string',
          'uuid': 'string',
          'bpchar': 'string',
          'jsonb': 'Record<string, unknown>'
        }
      }
    },
    './app/graphql/schema.json': {
      plugins: ['introspection'],
    },
  },
}
