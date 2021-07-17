import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { DateTime } from 'luxon'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Except } from 'type-fest'
import type { Pool } from '../../types.js'
import type { DCAOrder } from './types.js'

const createDCAOrder = async (
  pool: Pool,
  dcaOrder: Except<DCAOrder, 'UID'>,
): Promise<DCAOrder | Error> => {
  const insert: s.dca_order.Insertable = {
    uid: randomUUID(),
    created_at: new Date(),
    updated_at: new Date(),
    user_uid: dcaOrder.userUID,
    exchange_uid: dcaOrder.exchangeUID,
    market_uid: dcaOrder.marketUID,
    start_at: dcaOrder.startAt.toJSDate(),
    market_offset: dcaOrder.marketOffset,
    daily_average: dcaOrder.dailyAverage,
    min_price: dcaOrder.minPrice,
    max_price: dcaOrder.maxPrice,
    min_amount: dcaOrder.minAmount,
    max_amount: dcaOrder.maxAmount,
  }

  const rows = await errorBoundary(async () =>
    db.sql<s.dca_order.SQL, s.dca_order.Selectable[]>`
INSERT INTO ${'dca_order'} (${db.cols(insert)})
VALUES (${db.vals(insert)})
RETURNING uid
  `.run(pool),
  )
  if (rows instanceof Error) {
    return rows
  }

  const row = rows[0]
  if (!row) {
    return new Error('Failed to insert row into dca_order.')
  }

  return {
    UID: row.uid,
    userUID: row.user_uid,
    exchangeUID: row.exchange_uid,
    marketUID: row.market_uid,
    startAt: DateTime.fromJSDate(row.start_at),
    marketOffset: row.market_offset,
    dailyAverage: row.daily_average,
    minPrice: row.min_price ?? undefined,
    maxPrice: row.max_price ?? undefined,
    minAmount: row.min_amount ?? undefined,
    maxAmount: row.max_amount ?? undefined,
  }
}

export { createDCAOrder }
