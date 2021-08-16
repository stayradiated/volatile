import nJwt from 'njwt'
import { DateTime } from 'luxon'

import { JWT_SECRET } from '../../env.js'

type AuthToken = {
  authToken: string
  expiresAt: DateTime
}

const generateAuthToken = (userUID: string): AuthToken => {
  const expiresAt = DateTime.local().plus({ hours: 24 })

  const authToken = nJwt
    .create(
      {
        iss: 'kc-server',
        sub: userUID,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['user'],
          'x-hasura-default-role': 'user',
          'x-hasura-user-id': userUID,
        },
      },
      JWT_SECRET,
    )
    .setExpiration(expiresAt.toJSDate())
    .compact()

  return { authToken, expiresAt }
}

export { generateAuthToken }
