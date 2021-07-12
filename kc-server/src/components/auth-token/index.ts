import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'

import * as hash from '../../utils/hash.js'

import type { Pool } from '../../types.js'

type CreateAuthTokenOptions = {
  email: string
  password: string
}

const createAuthToken = async (
  pool: Pool,
  options: CreateAuthTokenOptions,
): Promise<{ uid: string, authToken: string } | Error> => {
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

  return { uid: row.uid, authToken: 'authToken' }
}

export { createAuthToken }
