import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import type { Except } from 'type-fest'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import type { Trade } from './types.js'

type InsertTradeOptions = Except<Trade, 'UID'>

const insertTrade = async (
  pool: Pool,
  trade: InsertTradeOptions,
): Promise<Trade | Error> => {
  const row = await errorBoundary(async () =>
    db
      .insert(
        'trade',
        {
          uid: randomUUID(),
          created_at: new Date(),
          updated_at: new Date(),
          timestamp: trade.timestamp.toJSDate(),
          user_uid: trade.userUID,
          exchange_uid: trade.exchangeUID,
          order_uid: trade.orderUID,
          id: trade.ID,
          type: trade.type,
          symbol: trade.symbol,
          amount: trade.amount,
          price_nzd: trade.priceNZD,
          total_nzd: trade.totalNZD,
          fee_nzd: trade.feeNZD,
        },
        {
          returning: ['uid'],
        },
      )
      .run(pool),
  )
  if (row instanceof Error) {
    return row
  }

  return {
    ...trade,
    UID: row.uid,
  }
}

export { insertTrade, InsertTradeOptions }
