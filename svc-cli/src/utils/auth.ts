import prompts from 'prompts'

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
    $token2FA: String
  ) {
    create_auth_token(
      email: $email
      password: $password
      device_id: $deviceId
      device_name: $deviceName
      device_trusted: $deviceTrusted
      token_2fa: $token2FA
    ) {
      auth_token
    }
  }
`

const getAuthToken = async (
  config: Config,
  token2FA?: string,
): Promise<string | Error> => {
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
      token2FA,
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

const getAuthTokenWith2FA = async (config: Config): Promise<string | Error> => {
  const authToken = await getAuthToken(config)
  if (
    authToken instanceof Error &&
    authToken.message === 'E_AUTH: This user has 2FA enabled.'
  ) {
    const { value } = await prompts({
      type: 'text',
      name: 'value',
      message: '2FA Token:',
      validate: (value: string) => {
        const valid = /^\d{6}$/.test(value)
        return Boolean(valid)
      },
    })
    return getAuthToken(config, value)
  }

  return authToken
}

type AuthHeaders = {
  Authorization: string
}

const getAuthHeaders = async (config: Config): Promise<AuthHeaders | Error> => {
  const authToken = await getAuthTokenWith2FA(config)
  if (authToken instanceof Error) {
    return authToken
  }

  return {
    Authorization: `Bearer ${authToken}`,
  }
}

export { getAuthToken, getAuthHeaders }
