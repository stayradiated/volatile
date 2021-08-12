import ky from 'ky-universal'
import { HTTPError } from 'ky'
import { errorBoundary } from '@stayradiated/error-boundary'

type GraphqlOptions = {
  endpoint: string
  headers: Record<string, string>
  query: string
  variables: Record<string, unknown>
}

type GraphQLResult<Data> = {
  data: Data,
  errors?: Array<{
    message: string,
    extensions: unknown,
  }>
}

const graphql = async <T extends GraphQLResult<any>>(options: GraphqlOptions): Promise<T | Error> => {
  const { endpoint, headers, query, variables } = options

  const result = await errorBoundary(async () =>
    ky
      .post(endpoint, {
        headers,
        body: JSON.stringify({ query, variables }),
      })
      .json(),
  ) as T|Error

  if (result instanceof Error) {
    if (result instanceof HTTPError) {
      const response = (await result.response.json()) as Record<string, any>
      console.log(response)
    }

    return result
  }

  if (Array.isArray(result.errors) && result.errors[0]) {
    return new Error(result.errors[0].message)
  }

  return result
}

type GraphqlPaginateOptions<T> = {
  endpoint: string
  query: string
  variables: Record<string, unknown>
  headers: Record<string, string>
  getTotal: (row: T) => number
  merge: (a: T, b: T) => T
  limit?: number
  offset?: number
}

const graphqlPaginate = async <T extends GraphQLResult<any>>(
  options: GraphqlPaginateOptions<T>,
): Promise<T | Error> => {
  const {
    endpoint,
    query,
    variables,
    headers,
    getTotal,
    merge,
    limit = 100,
    offset = 0,
  } = options

  const result = await graphql<T>({
    endpoint,
    query,
    headers,
    variables: {
      ...variables,
      limit,
      offset,
    },
  })
  if (result instanceof Error) {
    return result
  }

  const count = limit + offset
  const total = getTotal(result)
  if (total > count) {
    const nextResults = await graphqlPaginate({
      ...options,
      offset: offset + limit,
    })
    if (nextResults instanceof Error) {
      return nextResults
    }

    return merge(result, nextResults)
  }

  return result
}

export { graphql, graphqlPaginate, GraphQLResult }
