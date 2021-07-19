import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'
import { Except } from 'type-fest'

import type { Pool } from '../../types.js'
import type { Order } from './types.js'

type InsertOrderOptions = Except<Order, 'UID'>

const insertOrder = async (
  pool: Pool,
  options: InsertOrderOptions,
): Promise<Order | Error> => {
  const now = new Date()

  const insertable: s.order.Insertable = {
    uid: randomUUID(),
    created_at: now,
    updated_at: now,
    user_uid: options.userUID,
    exchange_uid: options.exchangeUID,
    id: options.ID,
    symbol: options.symbol,
    price: options.price,
    amount: options.amount,
    type: options.type,
    opened_at: options.openedAt.toJSDate(),
    closed_at: options.closedAt ? options.closedAt.toJSDate() : undefined,
  }

  const rows = await errorBoundary(async () =>
    db.insert('order', [insertable], { returning: ['uid'] }).run(pool),
  )
  if (rows instanceof Error) {
    return rows
  }

  const row = rows[0]
  if (!row) {
    return new Error('Could not insert row into kc.order.')
  }

  return {
    ...options,
    UID: row.uid,
  }
}

export { insertOrder }
