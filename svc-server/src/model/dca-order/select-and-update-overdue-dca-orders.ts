import db, { conditions as dc } from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'

import type { DcaOrder } from './types.js'

import { execute } from './execute/index.js'
import { mapRowToDcaOrder } from './map-row-to-dca-order.js'

const selectAndUpdateOverdueDcaOrders = async (
  pool: Pool,
): Promise<DcaOrder[] | Error> => {
  const dcaOrderuidList = await execute(pool)
  if (dcaOrderuidList instanceof Error) {
    return dcaOrderuidList
  }

  const rows = await errorBoundary(async () =>
    db
      .select('dca_order', {
        uid: dc.isIn(dcaOrderuidList),
      })
      .run(pool),
  )
  if (rows instanceof Error) {
    return rows
  }

  return rows.map((row) => mapRowToDcaOrder(row))
}

export { selectAndUpdateOverdueDcaOrders }
