import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import { DateTime } from 'luxon'

import type { Pool } from '../../types.js'
import type { Currency } from './types.js'

const upsertCurrency = async (
  pool: Pool,
  currency: Currency,
): Promise<void | Error> => {
  const now = DateTime.local().toJSDate()

  const error = await errorBoundary(async () =>
    db
      .upsert(
        'currency',
        {
          symbol: currency.symbol,
          created_at: now,
          updated_at: now,
          name: currency.name,
        },
        ['symbol'],
        {
          updateColumns: ['updated_at', 'name'],
        },
      )
      .run(pool),
  )
  if (error instanceof Error) {
    return error
  }

  return undefined
}

export { upsertCurrency }
