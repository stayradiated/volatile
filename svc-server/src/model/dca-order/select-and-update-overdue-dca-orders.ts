import db, { conditions as dc } from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'

import type { DCAOrder } from './types.js'

import { execute } from './execute/index.js'
import { mapRowToDCAOrder } from './map-row-to-dca-order.js'

const selectAndUpdateOverdueDCAOrders = async (
  pool: Pool,
): Promise<DCAOrder[] | Error> => {
  const dcaOrderUIDList = await execute(pool)
  if (dcaOrderUIDList instanceof Error) {
    return dcaOrderUIDList
  }

  const rows = await errorBoundary(async () =>
    db
      .select('dca_order', {
        uid: dc.isIn(dcaOrderUIDList),
      })
      .run(pool),
  )
  if (rows instanceof Error) {
    return rows
  }

  return rows.map(mapRowToDCAOrder)
}

export { selectAndUpdateOverdueDCAOrders }
