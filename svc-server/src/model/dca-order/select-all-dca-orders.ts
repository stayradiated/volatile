import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import { mapRowToDcaOrder } from './map-row-to-dca-order.js'
import type { DcaOrder } from './types.js'

type SelectAllDcaOrdersOptions = {
  exchangeUid?: string
  marketUid?: string
  userUid?: string
  enabled?: boolean
}

const selectAllDcaOrders = async (
  pool: Pool,
  options: SelectAllDcaOrdersOptions,
): Promise<DcaOrder[] | Error> => {
  const where: s.dca_order.Whereable = {}
  if (options.userUid) {
    where.user_uid = options.userUid
  }

  if (options.exchangeUid) {
    where.exchange_uid = options.exchangeUid
  }

  if (options.marketUid) {
    where.market_uid = options.marketUid
  }

  if (options.enabled) {
    where.enabled_at = db.sql`${db.self} <= now()`
  }

  const rows = await errorBoundary(async () =>
    db.select('dca_order', where).run(pool),
  )
  if (rows instanceof Error) {
    return rows
  }

  return rows.map((row) => mapRowToDcaOrder(row))
}

export { selectAllDcaOrders }
