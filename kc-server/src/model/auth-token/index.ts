import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import nJwt from 'njwt'

import * as hash from '../../util/hash.js'
import { JWT_SECRET } from '../../env.js'

import type { Pool } from '../../types.js'

type CreateAuthTokenOptions = {
  email: string
  password: string
}

const createAuthToken = async (
  pool: Pool,
  options: CreateAuthTokenOptions,
): Promise<{ uid: string; authToken: string } | Error> => {
  const { email, password } = options

  const emailHash = hash.sha256(email)

  const [row] = await db.sql<s.user.SQL, s.user.Selectable[]>`
    SELECT uid, password_hash
    FROM ${'user'}
    WHERE ${{ email_hash: emailHash }}
  `.run(pool)

  if (!row) {
    return new Error('Invalid email or password.')
  }

  const passwordMatches = await hash.bcryptCompare(password, row.password_hash)
  if (!passwordMatches) {
    return new Error('Invalid email or password.')
  }

  const uid = row.uid

  const authToken = nJwt
    .create(
      {
        iss: 'kc-server',
        sub: uid,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['user'],
          'x-hasura-default-role': 'user',
          'x-hasura-user-id': uid,
        },
      },
      JWT_SECRET,
    )
    .compact()

  return { uid, authToken }
}

export { createAuthToken }
