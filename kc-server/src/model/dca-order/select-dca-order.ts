import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DBError } from '../../util/error.js'
import type { Pool } from '../../types.js'

import { mapRowToDCAOrder } from './map-row-to-dca-order.js'
import type { DCAOrder } from './types.js'

const selectDCAOrder = async (
  pool: Pool,
  dcaOrderUID: string,
): Promise<DCAOrder | Error> => {
  const row = await errorBoundary(async () =>
    db.selectOne('dca_order', { uid: dcaOrderUID }).run(pool),
  )
  if (!row || row instanceof Error) {
    return new DBError({
      message: `Could not select DCA order with UID=${dcaOrderUID}.`,
      cause: row,
      context: { 
        dcaOrderUID,
      }
    })
  }

  return mapRowToDCAOrder(row)
}

export { selectDCAOrder }
