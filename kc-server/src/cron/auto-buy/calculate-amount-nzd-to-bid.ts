import * as db from 'zapatos/db'
import * as s from 'zapatos/schema'
import { errorBoundary } from '@stayradiated/error-boundary'

import { DBError } from '../../util/error.js'

import type { DCAOrder } from '../../model/dca-order/index.js'
import type { Pool } from '../../types.js'

type CalculateAmountNZDToBidOptions = {
  dcaOrder: DCAOrder,
  goalAmountNZD: number,
  availableBalanceNZD: number,
}

type ResultSQL= {
  sum_bid: string | null
  sum_goal: string | null
}

const calculateAmountNZDToBid = async (pool: Pool, options: CalculateAmountNZDToBidOptions): Promise<number|Error> => {
  const { dcaOrder, goalAmountNZD, availableBalanceNZD } = options

  const rows = await errorBoundary(() => db.sql<s.dca_order.SQL|s.dca_order_history.SQL|s.order.SQL, ResultSQL[]>`
  SELECT 
    sum(${'dca_order_history'}.${'calculated_amount_nzd'}) as sum_goal,
    sum(${'order'}.${'amount'} * ${'order'}.${'price_nzd'}) as sum_bid
  FROM ${'dca_order'}
  INNER JOIN ${'dca_order_history'}
    ON ${'dca_order_history'}.${'dca_order_uid'} = ${'dca_order'}.${'uid'}
  INNER JOIN ${'order'}
    ON ${'dca_order_history'}.${'order_uid'} = ${'order'}.${'uid'}
  WHERE
        ${'order'}.${'closed_at'} IS NULL
    AND ${'dca_order'}.${'user_exchange_keys_uid'} = ${db.param(dcaOrder.userExchangeKeysUID)}
    AND ${'dca_order'}.${'uid'} != ${db.param(dcaOrder.UID)}
  `.run(pool))
  if (rows instanceof Error) {
    return new DBError({
      message: 'Could not query dca orders for calculateAmountNZDToBid.',
      cause: rows,
      context: {
        dcaOrderUID: dcaOrder.UID,
        userExchangeKeysUID: dcaOrder.userExchangeKeysUID
      }
    })
  }

  const goalOrMaxAmountNZD = Math.min(goalAmountNZD, dcaOrder.maxAmountNZD ?? Number.POSITIVE_INFINITY)

  const row = rows[0]!
  const sumGoalNZD = Number.parseFloat(row.sum_goal ?? '0') + goalOrMaxAmountNZD
  const sumAvailableNZD = Number.parseFloat(row.sum_bid ?? '0') + availableBalanceNZD

  const portion = Math.min(1, goalOrMaxAmountNZD / sumGoalNZD) * sumAvailableNZD

  const bid = Math.min(availableBalanceNZD, goalOrMaxAmountNZD, portion)
  return bid
}

export { calculateAmountNZDToBid }
