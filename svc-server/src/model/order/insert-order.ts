import { randomUUID } from 'node:crypto'
import * as db from 'zapatos/db'
import * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'
import { Except } from 'type-fest'

import { DBError } from '../../util/error.js'

import type { Pool } from '../../types.js'
import type { Order } from './types.js'

type InsertOrderOptions = Except<Order, 'uid'>

const insertOrder = async (
  pool: Pool,
  options: InsertOrderOptions,
): Promise<Order | Error> => {
  const now = new Date()

  const value: s.order.Insertable = {
    uid: randomUUID(),
    created_at: now,
    updated_at: now,
    user_uid: options.userUid,
    exchange_uid: options.exchangeUid,
    order_id: options.orderId,
    primary_currency: options.primaryCurrency,
    secondary_currency: options.secondaryCurrency,
    price: options.price,
    volume: options.volume,
    value: options.value,
    type: options.type,
    opened_at: options.openedAt,
    closed_at: options.closedAt,
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
    uid: rows[0]!.uid,
  }
}

export { insertOrder, InsertOrderOptions }
