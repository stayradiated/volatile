import * as db from 'zapatos/db'
import * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import { mapRowToOrder } from './map-row-to-order.js'

import type { Order } from './types.js'

type SelectOpenOrdersForDCAOptions = {
  dcaOrderUID: string
}

const selectOpenOrdersForDCA = async (
  pool: Pool,
  options: SelectOpenOrdersForDCAOptions,
): Promise<Order[] | Error> => {
  const { dcaOrderUID } = options

  const rows = await errorBoundary(async () =>
    db.sql<s.order.SQL | s.dca_order_history.SQL, s.order.Selectable[]>`
      SELECT ${'order'}.*
      FROM ${'order'}
      INNER JOIN ${'dca_order_history'}
        ON ${'dca_order_history'}.${'order_uid'} = ${'order'}.uid
        AND ${'dca_order_history'}.${'dca_order_uid'} = ${db.param(dcaOrderUID)}
      WHERE
        ${'order'}.${'closed_at'} IS NULL
      `.run(pool),
  )

  if (rows instanceof Error) {
    return rows
  }

  const orders = rows.map((row) => mapRowToOrder(row))

  return orders
}

export { selectOpenOrdersForDCA }
