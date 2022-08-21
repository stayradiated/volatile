import * as db from 'zapatos/db'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DBError } from '../../util/error.js'
import type { Pool } from '../../types.js'

import { mapRowToDcaOrder } from './map-row-to-dca-order.js'
import type { DcaOrder } from './types.js'

const selectDcaOrder = async (
  pool: Pool,
  dcaOrderUid: string,
): Promise<DcaOrder | Error> => {
  const row = await errorBoundary(async () =>
    db.selectOne('dca_order', { uid: dcaOrderUid }).run(pool),
  )
  if (!row || row instanceof Error) {
    return new DBError({
      message: `Could not select Dca order with uid=${dcaOrderUid}.`,
      cause: row,
      context: {
        dcaOrderUid,
      },
    })
  }

  return mapRowToDcaOrder(row)
}

export { selectDcaOrder }
