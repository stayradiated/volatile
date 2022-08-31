import { GraphQLClient, ClientError } from 'graphql-request'
import config from './env.server'
import { getSdk } from '~/graphql/generated'

const sdk = getSdk(
  new GraphQLClient(config.GRAPHQL_ENDPOINT),
  async (action) => {
    try {
      const result = await action()
      return result
    } catch (error: unknown) {
      if (
        error instanceof ClientError &&
        error.response.errors &&
        error.response.errors.length > 0
      ) {
        const message = error.response.errors
          .map((error) => error.message)
          .join(' • ')
        throw new Error(message, { cause: error })
      }

      throw error
    }
  },
)

export { sdk }
