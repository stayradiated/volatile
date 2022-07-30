import nJwt from 'njwt'
import { addMilliseconds } from 'date-fns'

import { config } from '../../env.js'

type GenerateAuthTokenOptions = {
  userUID: string
  role: 'user' | 'superuser'
}

type AuthToken = {
  authToken: string
  expiresAt: Date
}

const generateAuthToken = (options: GenerateAuthTokenOptions): AuthToken => {
  const { userUID, role } = options

  const maxAgeMs =
    role === 'superuser'
      ? 1000 * 60 * 15 // 15 minutes
      : 1000 * 60 * 60 * 24 * 3 // 3 days

  const expiresAt = addMilliseconds(new Date(), maxAgeMs)

  const allowedRoles = role === 'superuser' ? ['user', 'superuser'] : ['user']

  const authToken = nJwt
    .create(
      {
        iss: 'kc-server',
        sub: userUID,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': allowedRoles,
          'x-hasura-default-role': role,
          'x-hasura-user-id': userUID,
        },
      },
      config.JWT_SECRET,
    )
    .setExpiration(expiresAt)
    .compact()

  return { authToken, expiresAt }
}

export { generateAuthToken }
