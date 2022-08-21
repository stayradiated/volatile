import { randomUUID } from 'node:crypto'
import * as db from 'zapatos/db'
import * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'
import type { SetOptional } from 'type-fest'

import { DBError } from '../../util/error.js'

import type { Pool } from '../../types.js'
import type { Order } from './types.js'

type UpsertOrderOptions = SetOptional<Order, 'uid'>

const upsertOrder = async (
  pool: Pool,
  order: UpsertOrderOptions,
): Promise<string | Error> => {
  const now = new Date()

  const value: s.order.Insertable = {
    uid: order.uid ?? randomUUID(),
    created_at: now,
    updated_at: now,
    user_uid: order.userUid,
    exchange_uid: order.exchangeUid,
    order_id: order.orderId,
    primary_currency: order.primaryCurrency,
    secondary_currency: order.secondaryCurrency,
    volume: order.volume,
    price: order.price,
    value: order.value,
    type: order.type,
    opened_at: order.openedAt,
    closed_at: order.closedAt,
  }

  const row = await errorBoundary(async () =>
    db
      .upsert('order', value, db.constraint('unique_exchange_order_id'), {
        updateColumns: [
          'primary_currency',
          'secondary_currency',
          'price',
          'volume',
          'value',
          'type',
          'opened_at',
          'closed_at',
        ],
        returning: ['uid'],
      })
      .run(pool),
  )
  if (row instanceof Error) {
    return new DBError({
      message: 'Could not upsert order',
      cause: row,
      context: { order },
    })
  }

  return row.uid
}

export { upsertOrder }
export type { UpsertOrderOptions }
