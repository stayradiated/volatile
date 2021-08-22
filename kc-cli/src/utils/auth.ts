import { graphql } from './graphql.js'

import type { Config } from './create-handler.js'
import type {
  GetAuthTokenMutation,
  GetAuthTokenMutationVariables,
} from './auth.graphql'

const GUEST_SESSION = {
  'x-hasura-role': 'guest',
}

const QUERY_CREATE_AUTH_TOKEN = /* GraphQL */ `
  mutation getAuthToken(
    $email: String!
    $password: String!
    $deviceId: String!
    $deviceName: String!
    $deviceTrusted: Boolean!
  ) {
    create_auth_token(
      email: $email
      password: $password
      device_id: $deviceId
      device_name: $deviceName
      device_trusted: $deviceTrusted
    ) {
      auth_token
    }
  }
`

const getAuthToken = async (config: Config): Promise<string | Error> => {
  const result = await graphql<
    GetAuthTokenMutation,
    GetAuthTokenMutationVariables
  >({
    endpoint: config.endpoint,
    headers: GUEST_SESSION,
    query: QUERY_CREATE_AUTH_TOKEN,
    variables: {
      email: config.email,
      password: config.password,
      deviceId: 'f0836586-d657-46cb-98cd-812edfebfe42',
      deviceName: 'kc-cli',
      deviceTrusted: false,
    },
  })
  if (result instanceof Error) {
    return result
  }

  const authToken = result.data.create_auth_token?.auth_token
  if (!authToken) {
    return new Error('Failed to get auth token from server')
  }

  return authToken
}

type AuthHeaders = {
  Authorization: string
}

const getAuthHeaders = async (config: Config): Promise<AuthHeaders | Error> => {
  const authToken = await getAuthToken(config)
  if (authToken instanceof Error) {
    return authToken
  }

  return {
    Authorization: `Bearer ${authToken}`,
  }
}

export { getAuthToken, getAuthHeaders }
