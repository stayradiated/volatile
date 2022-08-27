import { randomUUID } from 'node:crypto'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'
import type { Except } from 'type-fest'

import { DbError } from '../../util/error.js'
import type { Pool } from '../../types.js'
import type { DcaOrderHistory } from './types.js'

type InsertDcaOrderHistoryOptions = Except<DcaOrderHistory, 'uid'>

const insertDcaOrderHistory = async (
  pool: Pool,
  options: InsertDcaOrderHistoryOptions,
): Promise<DcaOrderHistory | Error> => {
  const value: s.dca_order_history.Insertable = {
    uid: randomUUID(),
    created_at: options.createdAt,
    updated_at: options.updatedAt,
    user_uid: options.userUid,
    dca_order_uid: options.dcaOrderUid,
    created_order: options.orderUid !== undefined,
    order_uid: options.orderUid,
    primary_currency: options.primaryCurrency,
    secondary_currency: options.secondaryCurrency,
    market_price: options.marketPrice,
    market_offset: options.marketOffset,
    target_value: options.targetValue,
    value: options.value,
    available_balance: options.availableBalance,
    description: options.description,
  }

  const rows = await errorBoundary(async () =>
    db.insert('dca_order_history', [value], { returning: ['uid'] }).run(pool),
  )
  if (rows instanceof Error || !rows) {
    return new DbError('Could not insert row into kc.dca_order_history.', {
      cause: rows,
    })
  }

  return {
    ...options,
    uid: rows[0]!.uid,
  }
}

export { insertDcaOrderHistory, type InsertDcaOrderHistoryOptions }
