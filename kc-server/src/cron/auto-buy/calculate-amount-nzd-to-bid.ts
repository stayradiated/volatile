import * as db from 'zapatos/db'
import * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DBError } from '../../util/error.js'

import type { Pool } from '../../types.js'

type CalculateAmountNZDToBidOptions = {
  dcaOrderUID: string
  userExchangeKeysUID: string
  targetAmountNZD: number
  availableBalanceNZD: number
}

type ResultSQL = {
  sum_bid: string | null
  sum_target: string | null
}

const calculateAmountNZDToBid = async (
  pool: Pool,
  options: CalculateAmountNZDToBidOptions,
): Promise<number | Error> => {
  const {
    dcaOrderUID,
    userExchangeKeysUID,
    targetAmountNZD,
    availableBalanceNZD,
  } = options

  const rows = await errorBoundary(async () =>
    db.sql<
      s.dca_order.SQL | s.dca_order_history.SQL | s.order.SQL,
      ResultSQL[]
    >`
  SELECT 
    sum(${'dca_order_history'}.${'target_amount_nzd'}) as sum_target,
    sum(${'order'}.${'amount'} * ${'order'}.${'price_nzd'}) as sum_bid
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
      message: 'Could not query dca orders for calculateAmountNZDToBid.',
      cause: rows,
      context: {
        dcaOrderUID,
        userExchangeKeysUID,
      },
    })
  }

  const row = rows[0]!
  const sumTargetNZD =
    Number.parseFloat(row.sum_target ?? '0') + targetAmountNZD
  const sumAvailableNZD =
    Number.parseFloat(row.sum_bid ?? '0') + availableBalanceNZD

  const portion = Math.min(1, targetAmountNZD / sumTargetNZD) * sumAvailableNZD

  const bid = Math.min(availableBalanceNZD, targetAmountNZD, portion)
  return bid
}

export { calculateAmountNZDToBid }
