import * as db from 'zapatos/db'
import * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import { mapRowToOrder } from './map-row-to-order.js'

import type { Order } from './types.js'

type SelectOpenOrdersForDcaOptions = {
  dcaOrderUid: string
}

const selectOpenOrdersForDca = async (
  pool: Pool,
  options: SelectOpenOrdersForDcaOptions,
): Promise<Order[] | Error> => {
  const { dcaOrderUid } = options

  const rows = await errorBoundary(async () =>
    db.sql<s.order.SQL | s.dca_order_history.SQL, s.order.Selectable[]>`
      SELECT ${'order'}.*
      FROM ${'order'}
      INNER JOIN ${'dca_order_history'}
        ON ${'dca_order_history'}.${'order_uid'} = ${'order'}.uid
        AND ${'dca_order_history'}.${'dca_order_uid'} = ${db.param(dcaOrderUid)}
      WHERE
        ${'order'}.${'closed_at'} IS NULL
      ORDER BY ${'order'}.${'opened_at'} ASC;
      `.run(pool),
  )

  if (rows instanceof Error) {
    return rows
  }

  const orders = rows.map((row) => mapRowToOrder(row))

  return orders
}

export { selectOpenOrdersForDca }
