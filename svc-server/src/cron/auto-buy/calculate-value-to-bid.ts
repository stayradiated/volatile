import * as db from 'zapatos/db'
import * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DBError, IllegalStateError } from '../../util/error.js'

import type { Pool } from '../../types.js'

type CalculateValueToBidOptions = {
  dcaOrderUID: string
  userExchangeKeysUID: string
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
  const { dcaOrderUID, userExchangeKeysUID, targetValue, availableBalance } =
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
      userExchangeKeysUID,
    )}
    AND ${'dca_order'}.${'uid'} != ${db.param(dcaOrderUID)}
  `.run(pool),
  )
  if (rows instanceof Error) {
    return new DBError({
      message: 'Could not query dca orders for calculateValueToBid.',
      cause: rows,
      context: {
        dcaOrderUID,
        userExchangeKeysUID,
      },
    })
  }

  const row = rows[0]!
  const sumTarget = Number.parseFloat(row.sum_target ?? '0') + targetValue
  const sumAvailable = Number.parseFloat(row.sum_bid ?? '0') + availableBalance

  const portion = Math.min(1, targetValue / sumTarget || 0) * sumAvailable

  const bid = Math.min(availableBalance, targetValue, portion)
  if (typeof bid !== 'number' || Number.isNaN(bid)) {
    return new IllegalStateError({
      message: 'Calculated value to bid is not a number',
      context: {
        bid,
        availableBalance,
        targetValue,
        portion,
        sumAvailable,
        sumTarget,
        row,
      },
    })
  }

  return bid
}

export { calculateValueToBid }
