import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import { mapRowToUserExchangeKeys } from './map-row-to-user-exchange-keys.js'
import type { UserExchangeKeys } from './types.js'

const getUserExchangeKeys = async (
  pool: Pool,
  userExchangeKeysUID: string,
): Promise<UserExchangeKeys | Error> => {
  const row = await errorBoundary(async () =>
    db
      .selectExactlyOne('user_exchange_keys', { uid: userExchangeKeysUID })
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  return mapRowToUserExchangeKeys(row)
}

export { getUserExchangeKeys }
