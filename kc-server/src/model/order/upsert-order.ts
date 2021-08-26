import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'
import type { SetOptional } from 'type-fest'

import { DBError } from '../../util/error.js'

import type { Pool } from '../../types.js'
import type { Order } from './types.js'

type UpsertOrderOptions = SetOptional<Order, 'UID'>

const upsertOrder = async (
  pool: Pool,
  order: UpsertOrderOptions,
): Promise<string | Error> => {
  const now = new Date()

  const value: s.order.Insertable = {
    uid: order.UID ?? randomUUID(),
    created_at: now,
    updated_at: now,
    user_uid: order.userUID,
    exchange_uid: order.exchangeUID,
    order_id: order.orderID,
    asset_symbol: order.assetSymbol,
    amount: order.amount,
    price_nzd: order.priceNZD,
    type: order.type,
    opened_at: order.openedAt.toJSDate(),
    closed_at: order.closedAt ? order.closedAt.toJSDate() : undefined,
  }

  const row = await errorBoundary(async () =>
    db
      .upsert('order', value, db.constraint('unique_exchange_order_id'), {
        updateColumns: [
          'asset_symbol',
          'price_nzd',
          'amount',
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
      message: 'Could not upsert order.',
      cause: row,
      context: { order },
    })
  }

  return row.uid
}

export { upsertOrder }
export type { UpsertOrderOptions }
