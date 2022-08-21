import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import type { ExchangeSecondaryCurrency } from './types.js'

const upsertExchangeSecondaryCurrency = async (
  pool: Pool,
  exchangeSecondaryCurrency: ExchangeSecondaryCurrency,
): Promise<void | Error> => {
  const now = new Date()

  const error = await errorBoundary(async () =>
    db
      .upsert(
        'exchange_secondary_currency',
        {
          exchange_uid: exchangeSecondaryCurrency.exchangeUid,
          symbol: exchangeSecondaryCurrency.symbol,
          created_at: now,
          updated_at: now,
        },
        ['exchange_uid', 'symbol'],
        {
          updateColumns: ['updated_at'],
        },
      )
      .run(pool),
  )
  if (error instanceof Error) {
    return error
  }

  return undefined
}

export { upsertExchangeSecondaryCurrency }
