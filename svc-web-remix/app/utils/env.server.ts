import { Type } from '@sinclair/typebox'
import type { Static } from '@sinclair/typebox'
import envSchema from 'env-schema'

const schema = Type.Strict(
  Type.Object({
    COOKIE_SECRET: Type.String(),
    GRAPHQL_ENDPOINT: Type.String(),
  }),
)

export type Config = Static<typeof schema>

const config = envSchema<Config>({
  schema,
  env: true,
})

export default config
