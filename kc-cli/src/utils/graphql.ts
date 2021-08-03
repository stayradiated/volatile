import ky from 'ky-universal'
import { HTTPError } from 'ky'
import { errorBoundary } from '@stayradiated/error-boundary'

const graphql = async <T>(
  endpoint: string,
  headers: Record<string, string>,
  query: string,
  variables: Record<string, unknown>,
): Promise<T | Error> => {
  const result = await errorBoundary(async () =>
    ky
      .post(endpoint, {
        headers,
        body: JSON.stringify({ query, variables }),
      })
      .json(),
  )
  if (result instanceof Error) {
    if (result instanceof HTTPError) {
      const response = await result.response.json()
      console.log(response)
    }

    return result
  }

  return result as T
}

export { graphql }
