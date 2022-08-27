import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { AuthError, messageWithContext } from '../../util/error.js'

import * as hash from '../../util/hash.js'
import type { Pool } from '../../types.js'
import { generateAuthToken } from './generate-auth-token.js'

type CreateAuthTokenOptions = {
  email: string
  password: string
  role: 'user' | 'superuser'
}

type AuthTokenResult = {
  userUid: string
  authToken: string
  expiresAt: Date
}

const createAuthToken = async (
  pool: Pool,
  options: CreateAuthTokenOptions,
): Promise<AuthTokenResult | Error> => {
  const { email, password, role } = options

  const emailHash = hash.sha256(email)

  const row = await errorBoundary(async () =>
    db
      .selectOne(
        'user',
        { email_hash: emailHash },
        {
          columns: ['uid', 'password_hash'],
        },
      )
      .run(pool),
  )
  if (row instanceof Error) {
    return new AuthError('Could not read user from database', { cause: row })
  }

  if (!row) {
    return new AuthError(
      messageWithContext(`Invalid email or password.`, { emailHash }),
    )
  }

  const passwordMatches = await hash.bcryptCompare(password, row.password_hash)
  if (!passwordMatches) {
    return new AuthError(
      messageWithContext(`Invalid email or password.`, { passwordMatches }),
    )
  }

  const userUid = row.uid
  const { authToken, expiresAt } = generateAuthToken({ userUid, role })

  return { userUid, authToken, expiresAt }
}

export { createAuthToken }
