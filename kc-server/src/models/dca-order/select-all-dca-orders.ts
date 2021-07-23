import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import { mapRowToDCAOrder } from './map-row-to-dca-order.js'
import type { DCAOrder } from './types.js'

type SelectAllDCAOrdersOptions = {
  exchangeUID?: string
  marketUID?: string
  userUID?: string
}

const selectAllDCAOrders = async (
  pool: Pool,
  options: SelectAllDCAOrdersOptions,
): Promise<DCAOrder[] | Error> => {
  const where: s.dca_order.Whereable = {}
  if (options.userUID) {
    where.user_uid = options.userUID
  }

  if (options.exchangeUID) {
    where.exchange_uid = options.exchangeUID
  }

  if (options.marketUID) {
    where.market_uid = options.marketUID
  }

  const rows = await errorBoundary(async () =>
    db.select('dca_order', where).run(pool),
  )
  if (rows instanceof Error) {
    return rows
  }

  return rows.map((row) => mapRowToDCAOrder(row))
}

export { selectAllDCAOrders }
