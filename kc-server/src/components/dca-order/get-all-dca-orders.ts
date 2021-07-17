import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import { DateTime } from 'luxon'

import type { Pool } from '../../types.js'
import type { DCAOrder } from './types.js'

const getAllDCAOrders = async (pool: Pool): Promise<DCAOrder[] | Error> => {
  const rows = await errorBoundary(async () =>
    db.select('dca_order', db.all).run(pool),
  )
  if (rows instanceof Error) {
    return rows
  }

  return rows.map<DCAOrder>((row) => ({
    UID: row.uid,
    userUID: row.user_uid,
    exchangeUID: row.exchange_uid,
    marketUID: row.market_uid,
    startAt: DateTime.fromISO(row.start_at),
    marketOffset: row.market_offset,
    dailyAverage: row.daily_average,
    minPrice: row.min_price ?? undefined,
    maxPrice: row.max_price ?? undefined,
    minAmount: row.min_amount ?? undefined,
    maxAmount: row.max_amount ?? undefined,
  }))
}

export { getAllDCAOrders }
