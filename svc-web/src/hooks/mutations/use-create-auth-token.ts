import { parseISO } from 'date-fns'
import { gql, useMutation } from '@apollo/client'

import type {
  CreateAuthTokenHookMutation,
  CreateAuthTokenHookMutationVariables,
} from '../../utils/graphql'

import { getDeviceID, getDeviceName } from '../../utils/device-store'
import { Session } from '../../utils/session-store'

const MUTATION_CREATE_AUTH_TOKEN = gql`
  mutation createAuthTokenHook(
    $email: String!
    $password: String!
    $deviceID: String!
    $deviceName: String!
    $deviceTrusted: Boolean!
    $token2FA: String
  ) {
    create_auth_token(
      email: $email
      password: $password
      device_id: $deviceID
      device_name: $deviceName
      device_trusted: $deviceTrusted
      token_2fa: $token2FA
    ) {
      user_uid
      auth_token
      expires_at
    }
  }
`

type CreateAuthTokenOptions = {
  email: string
  password: string
  token2FA: string | undefined
  deviceTrusted: boolean
}

type CreateAuthTokenFn = (options: CreateAuthTokenOptions) => Promise<Session>

const useCreateAuthToken = (): CreateAuthTokenFn => {
  const [createAuthToken] = useMutation<
    CreateAuthTokenHookMutation,
    CreateAuthTokenHookMutationVariables
  >(MUTATION_CREATE_AUTH_TOKEN)

  return async (options: CreateAuthTokenOptions) => {
    const { email, password, token2FA, deviceTrusted } = options

    const result = await createAuthToken({
      variables: {
        email,
        password,
        deviceID: getDeviceID(),
        deviceName: getDeviceName(),
        deviceTrusted,
        token2FA,
      },
    })

    if (!result.data || !result.data.create_auth_token?.user_uid) {
      throw new Error('fail')
    }

    const { user_uid: userUID, auth_token: authToken } =
      result.data.create_auth_token

    const expiresAt = parseISO(result.data.create_auth_token.expires_at)

    const session: Session = {
      role: 'user',
      userUID,
      email,
      authToken,
      expiresAt,
    }

    return session
  }
}

export { useCreateAuthToken }
