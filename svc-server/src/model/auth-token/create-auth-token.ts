import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { AuthError } from '../../util/error.js'

import * as hash from '../../util/hash.js'
import type { Pool } from '../../types.js'
import { generateAuthToken } from './generate-auth-token.js'

type CreateAuthTokenOptions = {
  email: string
  password: string
}

type AuthTokenResult = {
  userUID: string
  authToken: string
  expiresAt: Date
}

const createAuthToken = async (
  pool: Pool,
  options: CreateAuthTokenOptions,
): Promise<AuthTokenResult | Error> => {
  const { email, password } = options

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
    return new AuthError({
      message: 'Could not read user from database',
      cause: row,
      context: { emailHash },
    })
  }

  if (!row) {
    return new AuthError({
      message: 'Invalid email or password.',
      context: { emailHash },
    })
  }

  const passwordMatches = await hash.bcryptCompare(password, row.password_hash)
  if (!passwordMatches) {
    return new AuthError({
      message: 'Invalid email or password.',
      context: { passwordMatches },
    })
  }

  const userUID = row.uid
  const { authToken, expiresAt } = generateAuthToken(userUID)

  return { userUID, authToken, expiresAt }
}

export { createAuthToken }
