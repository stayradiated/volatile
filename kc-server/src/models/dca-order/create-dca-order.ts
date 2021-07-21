import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Except } from 'type-fest'
import type { Pool } from '../../types.js'
import type { DCAOrder } from './types.js'

type CreateDCAOrderOptions = Except<DCAOrder, 'UID'>

const createDCAOrder = async (
  pool: Pool,
  dcaOrder: CreateDCAOrderOptions,
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
    min_price_nzd: dcaOrder.minPriceNZD,
    max_price_nzd: dcaOrder.maxPriceNZD,
    min_amount_nzd: dcaOrder.minAmountNZD,
    max_amount_nzd: dcaOrder.maxAmountNZD,
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
    ...dcaOrder,
    UID: row.uid,
  }
}

export { createDCAOrder, CreateDCAOrderOptions }
