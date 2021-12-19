import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Except } from 'type-fest'
import type { Pool } from '../../types.js'
import type { DCAOrder } from './types.js'

type InsertDCAOrderOptions = Except<DCAOrder, 'UID'>

const insertDCAOrder = async (
  pool: Pool,
  dcaOrder: InsertDCAOrderOptions,
): Promise<DCAOrder | Error> => {
  const insert: s.dca_order.Insertable = {
    uid: randomUUID(),
    created_at: new Date(),
    updated_at: new Date(),
    user_uid: dcaOrder.userUID,
    exchange_uid: dcaOrder.exchangeUID,
    primary_currency_symbol: dcaOrder.primaryCurrency,
    secondary_currency_symbol: dcaOrder.secondaryCurrency,
    user_exchange_keys_uid: dcaOrder.userExchangeKeysUID,
    market_uid: dcaOrder.marketUID,
    start_at: dcaOrder.startAt.toJSDate(),
    market_offset: dcaOrder.marketOffset,
    daily_average: dcaOrder.dailyAverage,
    min_price: dcaOrder.minPrice,
    max_price: dcaOrder.maxPrice,
    min_value: dcaOrder.minValue,
    max_value: dcaOrder.maxValue,
    enabled_at: dcaOrder.enabledAt ? dcaOrder.enabledAt.toJSDate() : undefined,
  }

  const row = await errorBoundary(async () =>
    db.insert('dca_order', insert, { returning: ['uid'] }).run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  return {
    ...dcaOrder,
    UID: row.uid,
  }
}

export { insertDCAOrder, InsertDCAOrderOptions }
