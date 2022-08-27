import prompts from 'prompts'

import { graphql } from './graphql.js'

import type { Config } from './create-handler.js'
import type {
  GetAuthTokenMutation,
  GetAuthTokenMutationVariables,
} from './auth.graphql'

const guestSession = {
  'x-hasura-role': 'guest',
}

const createAuthTokenQuery = /* GraphQL */ `
  mutation getAuthToken(
    $email: String!
    $password: String!
    $deviceId: String!
    $deviceName: String!
    $deviceTrusted: Boolean!
    $token2Fa: String
    $role: String!
  ) {
    actionCreateAuthToken(
      email: $email
      password: $password
      deviceId: $deviceId
      deviceName: $deviceName
      deviceTrusted: $deviceTrusted
      token2fa: $token2Fa
      role: $role
    ) {
      authToken
    }
  }
`

const getAuthToken = async (
  config: Config,
  token2Fa?: string,
): Promise<string | Error> => {
  const result = await graphql<
    GetAuthTokenMutation,
    GetAuthTokenMutationVariables
  >({
    endpoint: config.endpoint,
    headers: guestSession,
    query: createAuthTokenQuery,
    variables: {
      email: config.email,
      password: config.password,
      deviceId: 'f0836586-d657-46cb-98cd-812edfebfe42',
      deviceName: 'kc-cli',
      deviceTrusted: false,
      token2Fa,
      role: 'user',
    },
  })
  if (result instanceof Error) {
    return result
  }

  const authToken = result.data.actionCreateAuthToken?.authToken
  if (!authToken) {
    return new Error('Failed to get auth token from server')
  }

  return authToken
}

const getAuthTokenWith2Fa = async (config: Config): Promise<string | Error> => {
  const authToken = await getAuthToken(config)
  if (
    authToken instanceof Error &&
    authToken.message === 'EAUTH: This user has Two Factor Auth enabled.'
  ) {
    const promptResult = await prompts({
      type: 'text',
      name: 'value',
      message: 'Two Factor Auth Token:',
      validate(value: string) {
        const valid = /^\d{6}$/.test(value)
        return Boolean(valid)
      },
    })
    const value = promptResult.value as string
    return getAuthToken(config, value)
  }

  return authToken
}

type AuthHeaders = {
  authorization: string
}

const getAuthHeaders = async (config: Config): Promise<AuthHeaders | Error> => {
  const authToken = await getAuthTokenWith2Fa(config)
  if (authToken instanceof Error) {
    return authToken
  }

  return {
    authorization: `Bearer ${authToken}`,
  }
}

export { getAuthToken, getAuthHeaders }
