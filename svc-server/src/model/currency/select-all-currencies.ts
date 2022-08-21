import db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import { mapRowToCurrency } from './map-row-to-currency.js'

import type { Currency } from './types.js'

const selectAllCurrencies = async (pool: Pool): Promise<Currency[] | Error> => {
  const rows = await errorBoundary(async () =>
    db.select('currency', db.all).run(pool),
  )
  if (rows instanceof Error) {
    return rows
  }

  return rows.map((row) => mapRowToCurrency(row))
}

export { selectAllCurrencies }
