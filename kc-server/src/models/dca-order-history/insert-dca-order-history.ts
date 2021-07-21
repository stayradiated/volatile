import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'
import { Except } from 'type-fest'

import type { Pool } from '../../types.js'

type DCAOrderHistory = {
  UID: string
  userUID: string
  dcaOrderUID: string
  orderUID: string
  marketPriceNZD: number
  marketOffset: number
}

type InsertDCAOrderHistoryOptions = Except<DCAOrderHistory, 'UID'>

const insertDCAOrderHistory = async (
  pool: Pool,
  options: InsertDCAOrderHistoryOptions,
): Promise<DCAOrderHistory | Error> => {
  const now = new Date()

  const insertable: s.dca_order_history.Insertable = {
    uid: randomUUID(),
    created_at: now,
    updated_at: now,
    user_uid: options.userUID,
    dca_order_uid: options.dcaOrderUID,
    order_uid: options.orderUID,
    market_price_nzd: options.marketPriceNZD,
    market_offset: options.marketOffset,
  }

  const rows = await errorBoundary(async () =>
    db
      .insert('dca_order_history', [insertable], { returning: ['uid'] })
      .run(pool),
  )
  if (rows instanceof Error) {
    return rows
  }

  const row = rows[0]
  if (!row) {
    return new Error('Could not insert row into kc.dca_order_history.')
  }

  return {
    ...options,
    UID: row.uid,
  }
}

export { insertDCAOrderHistory }
