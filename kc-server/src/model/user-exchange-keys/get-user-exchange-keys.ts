import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { explainError } from '../../util/error.js'

import type { Pool } from '../../types.js'
import { mapRowToUserExchangeKeys } from './map-row-to-user-exchange-keys.js'
import type { UserExchangeKeys } from './types.js'

const getUserExchangeKeys = async (
  pool: Pool,
  userExchangeKeysUID: string,
): Promise<UserExchangeKeys | Error> => {
  const row = await errorBoundary(async () =>
    db.selectOne('user_exchange_keys', { uid: userExchangeKeysUID }).run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  if (!row) {
    return explainError('Could not find User Exchange Keys.', {
      userExchangeKeysUID,
    })
  }

  return mapRowToUserExchangeKeys(row)
}

export { getUserExchangeKeys }
