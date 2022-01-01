import db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import type { Balance } from './types.js'

const upsertBalance = async (pool: Pool, balance: Balance) => {
  const error = await errorBoundary(async () =>
    db
      .upsert(
        'balance',
        {
          user_uid: balance.userUID,
          exchange_uid: balance.exchangeUID,
          currency_symbol: balance.currencySymbol,
          timestamp: balance.timestamp,
          total_balance: balance.totalBalance,
          available_balance: balance.availableBalance,
        },
        db.constraint('balance_pkey'),
        {
          updateColumns: ['total_balance', 'available_balance'],
        },
      )
      .run(pool),
  )

  if (error instanceof Error) {
    return error
  }

  return undefined
}

export { upsertBalance }
