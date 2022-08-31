import * as z from 'zod'

const schema = z.object({
  COOKIE_SECRET: z.string().min(10),
  GRAPHQL_ENDPOINT: z.string().url(),
})

const config = schema.parse(process.env)

export default config
