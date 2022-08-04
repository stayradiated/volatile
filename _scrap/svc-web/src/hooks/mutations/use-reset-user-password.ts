import { gql, useMutation } from '@apollo/client'
import { parseISO } from 'date-fns'

import type {
  UseResetUserPasswordMutation as Mutation,
  UseResetUserPasswordMutationVariables as MutationVariables,
} from '../../utils/graphql'

import { getDeviceID, getDeviceName } from '../../utils/device-store'
import { Session } from '../../utils/session-store'

const MUTATION = gql`
  mutation useResetUserPassword(
    $passwordResetSecret: String!
    $newPassword: String!
    $deviceID: String!
    $deviceName: String!
    $deviceTrusted: Boolean!
    $token2FA: String
  ) {
    reset_user_password(
      password_reset_secret: $passwordResetSecret
      new_password: $newPassword
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

type SendUserPasswordResetOptions = {
  email: string
  passwordResetSecret: string
  newPassword: string
}

type SendUserPasswordResetFn = (
  options: SendUserPasswordResetOptions,
) => Promise<Session>

const useResetUserPassword = (): SendUserPasswordResetFn => {
  const [mutation] = useMutation<Mutation, MutationVariables>(MUTATION)

  return async (options: SendUserPasswordResetOptions) => {
    const { email, passwordResetSecret, newPassword } = options

    const result = await mutation({
      variables: {
        passwordResetSecret,
        newPassword,
        deviceID: getDeviceID(),
        deviceName: getDeviceName(),
        deviceTrusted: false,
      },
    })

    if (!result.data || !result.data.reset_user_password?.auth_token) {
      throw new Error('fail')
    }

    const { user_uid: userUID, auth_token: authToken } =
      result.data.reset_user_password

    const expiresAt = parseISO(result.data.reset_user_password.expires_at)

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

export { useResetUserPassword }
