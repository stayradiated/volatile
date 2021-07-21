import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'
import { DateTime } from 'luxon'

import type { Pool } from '../../types.js'
import type { DCAOrder } from './types.js'

type GetAllDCAOrdersOptions = {
  exchangeUID?: string
  marketUID?: string
  userUID?: string
}

const getAllDCAOrders = async (
  pool: Pool,
  options: GetAllDCAOrdersOptions,
): Promise<DCAOrder[] | Error> => {
  const where: s.dca_order.Whereable = {}
  if (options.userUID) {
    where.user_uid = options.userUID
  }

  if (options.exchangeUID) {
    where.exchange_uid = options.exchangeUID
  }

  if (options.marketUID) {
    where.market_uid = options.marketUID
  }

  const rows = await errorBoundary(async () =>
    db.select('dca_order', where).run(pool),
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
    minPriceNZD: row.min_price_nzd ?? undefined,
    maxPriceNZD: row.max_price_nzd ?? undefined,
    minAmountNZD: row.min_amount_nzd ?? undefined,
    maxAmountNZD: row.max_amount_nzd ?? undefined,
  }))
}

export { getAllDCAOrders }
