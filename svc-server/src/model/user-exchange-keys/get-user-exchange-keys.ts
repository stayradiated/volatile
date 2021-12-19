import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DBError } from '../../util/error.js'

import type { Pool } from '../../types.js'
import { mapRowToUserExchangeKeys } from './map-row-to-user-exchange-keys.js'
import type { UserExchangeKeys } from './types.js'

const getUserExchangeKeys = async <Keys extends Record<string, string>>(
  pool: Pool,
  userExchangeKeysUID: string,
): Promise<UserExchangeKeys<Keys> | Error> => {
  const row = await errorBoundary(async () =>
    db.selectOne('user_exchange_keys', { uid: userExchangeKeysUID }).run(pool),
  )
  if (row instanceof Error || !row) {
    return new DBError({
      message: 'Could not find User Exchange Keys.',
      cause: row,
      context: { userExchangeKeysUID },
    })
  }

  return mapRowToUserExchangeKeys<Keys>(row)
}

export { getUserExchangeKeys }
