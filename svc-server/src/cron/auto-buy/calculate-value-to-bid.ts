import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import {
  DbError,
  messageWithContext,
  IllegalStateError,
} from '../../util/error.js'

import type { Pool } from '../../types.js'

type CalculateValueToBidOptions = {
  dcaOrderUid: string
  userExchangeKeysUid: string
  targetValue: number
  availableBalance: number
}

type ResultSQL = {
  sum_bid: string | undefined
  sum_target: string | undefined
}

const calculateValueToBid = async (
  pool: Pool,
  options: CalculateValueToBidOptions,
): Promise<number | Error> => {
  const { dcaOrderUid, userExchangeKeysUid, targetValue, availableBalance } =
    options

  const rows = await errorBoundary(async () =>
    db.sql<
      s.dca_order.SQL | s.dca_order_history.SQL | s.order.SQL,
      ResultSQL[]
    >`
  SELECT 
    sum(${'dca_order_history'}.${'target_value'}) as sum_target,
    sum(${'order'}.${'value'}) as sum_bid
  FROM ${'dca_order'}
  INNER JOIN ${'dca_order_history'}
    ON ${'dca_order_history'}.${'dca_order_uid'} = ${'dca_order'}.${'uid'}
  INNER JOIN ${'order'}
    ON ${'dca_order_history'}.${'order_uid'} = ${'order'}.${'uid'}
  WHERE
        ${'order'}.${'closed_at'} IS NULL
    AND ${'dca_order'}.${'user_exchange_keys_uid'} = ${db.param(
      userExchangeKeysUid,
    )}
    AND ${'dca_order'}.${'uid'} != ${db.param(dcaOrderUid)}
  `.run(pool),
  )
  if (rows instanceof Error) {
    return new DbError(
      messageWithContext(
        `Could not query dca orders for calculateValueToBid.`,
        { dcaOrderUid, userExchangeKeysUid },
      ),
      { cause: rows },
    )
  }

  const row = rows[0]!
  const sumTarget = Number.parseFloat(row.sum_target ?? '0') + targetValue
  const sumAvailable = Number.parseFloat(row.sum_bid ?? '0') + availableBalance

  const portion = Math.min(1, targetValue / sumTarget || 0) * sumAvailable

  const bid = Math.min(availableBalance, targetValue, portion)
  if (typeof bid !== 'number' || Number.isNaN(bid)) {
    return new IllegalStateError(
      messageWithContext(`Calculated value to bid is not a number`, {
        bid,
        availableBalance,
        targetValue,
        portion,
        sumAvailable,
        sumTarget,
        row,
      }),
    )
  }

  return bid
}

export { calculateValueToBid }
