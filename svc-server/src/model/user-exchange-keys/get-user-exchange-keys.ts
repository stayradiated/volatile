import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DbError } from '../../util/error.js'

import type { Pool } from '../../types.js'
import { mapRowToUserExchangeKeys } from './map-row-to-user-exchange-keys.js'
import type { UserExchangeKeys } from './types.js'

const getUserExchangeKeys = async <Keys extends Record<string, string>>(
  pool: Pool,
  userExchangeKeysUid: string,
): Promise<UserExchangeKeys<Keys> | Error> => {
  const row = await errorBoundary(async () =>
    db.selectOne('user_exchange_keys', { uid: userExchangeKeysUid }).run(pool),
  )
  if (row instanceof Error || !row) {
    return new DbError({
      message: 'Could not find User Exchange Keys.',
      cause: row,
      context: { userExchangeKeysUid },
    })
  }

  return mapRowToUserExchangeKeys<Keys>(row)
}

export { getUserExchangeKeys }
