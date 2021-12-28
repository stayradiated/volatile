import nJwt from 'njwt'
import { addHours } from 'date-fns'

import { JWT_SECRET } from '../../env.js'

type AuthToken = {
  authToken: string
  expiresAt: Date
}

const generateAuthToken = (userUID: string): AuthToken => {
  const expiresAt = addHours(new Date(), 24)

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
    .setExpiration(expiresAt)
    .compact()

  return { authToken, expiresAt }
}

export { generateAuthToken }
