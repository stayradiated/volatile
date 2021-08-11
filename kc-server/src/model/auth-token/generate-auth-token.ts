import nJwt from 'njwt'

import { JWT_SECRET } from '../../env.js'

const generateAuthToken = (userUID: string): string => {
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
    .compact()

  return authToken
}

export { generateAuthToken }
