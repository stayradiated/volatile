import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'
import { Except } from 'type-fest'

import { DBError } from '../../util/error.js'

import type { Pool } from '../../types.js'
import type { Order } from './types.js'

type InsertOrderOptions = Except<Order, 'UID'>

const insertOrder = async (
  pool: Pool,
  options: InsertOrderOptions,
): Promise<Order | Error> => {
  const now = new Date()

  const value: s.order.Insertable = {
    uid: randomUUID(),
    created_at: now,
    updated_at: now,
    user_uid: options.userUID,
    exchange_uid: options.exchangeUID,
    order_id: options.orderID,
    asset_symbol: options.assetSymbol,
    price_nzd: options.priceNZD,
    amount: options.amount,
    type: options.type,
    opened_at: options.openedAt.toJSDate(),
    closed_at: options.closedAt ? options.closedAt.toJSDate() : undefined,
  }

  const rows = await errorBoundary(async () =>
    db.insert('order', [value], { returning: ['uid'] }).run(pool),
  )
  if (rows instanceof Error || !rows) {
    return new DBError({
      message: 'Could not insert row into kc.order.',
      cause: rows,
      context: { value },
    })
  }

  return {
    ...options,
    UID: rows[0]!.uid,
  }
}

export { insertOrder, InsertOrderOptions }
