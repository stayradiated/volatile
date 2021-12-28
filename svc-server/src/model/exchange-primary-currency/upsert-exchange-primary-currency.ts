import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import type { ExchangePrimaryCurrency } from './types.js'

const upsertExchangePrimaryCurrency = async (
  pool: Pool,
  exchangePrimaryCurrency: ExchangePrimaryCurrency,
): Promise<void | Error> => {
  const now = new Date()

  const error = await errorBoundary(async () =>
    db
      .upsert(
        'exchange_primary_currency',
        {
          exchange_uid: exchangePrimaryCurrency.exchangeUID,
          symbol: exchangePrimaryCurrency.symbol,
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

export { upsertExchangePrimaryCurrency }
