import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'
import { DateTime } from 'luxon'

import type { Pool } from '../../types.js'
import type { Order } from './types.js'

type SelectOpenOrdersForDCAOptions = {
  dcaOrderUID: string
}

const selectOpenOrdersForDCA = async (
  pool: Pool,
  options: SelectOpenOrdersForDCAOptions,
): Promise<Order[] | Error> => {
  const rows = await errorBoundary(async () =>
    db
      .select(
        'dca_order_history',
        {
          dca_order_uid: options.dcaOrderUID,
        },
        {
          lateral: {
            orders: db.select('order', {
              uid: db.parent('order_uid'),
              closed_at: db.sql`${db.self} IS NULL`,
            }),
          },
        },
      )
      .run(pool),
  )

  if (rows instanceof Error) {
    return rows
  }

  const orders = rows
    .flatMap((row) => row.orders)
    .map((order) => ({
      UID: order.uid,
      userUID: order.user_uid,
      exchangeUID: order.exchange_uid,
      ID: order.id,
      symbol: order.symbol,
      priceNZD: order.price_nzd,
      amount: order.amount,
      type: order.type,
      openedAt: DateTime.fromISO(order.opened_at),
      closedAt: order.closed_at ? DateTime.fromISO(order.closed_at) : undefined,
    }))
  return orders
}

export { selectOpenOrdersForDCA }
