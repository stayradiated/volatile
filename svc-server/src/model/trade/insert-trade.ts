import { randomUUID } from 'node:crypto'
import * as db from 'zapatos/db'
import type { Except } from 'type-fest'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import type { Trade } from './types.js'

type InsertTradeOptions = Except<Trade, 'uid'>

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
          timestamp: trade.timestamp,
          user_uid: trade.userUid,
          exchange_uid: trade.exchangeUid,
          order_uid: trade.orderUid,
          trade_id: trade.tradeID,
          type: trade.type,
          primary_currency: trade.primaryCurrency,
          secondary_currency: trade.secondaryCurrency,
          volume: trade.volume,
          price: trade.price,
          value: trade.value,
          fee: trade.fee,
          total_value: trade.totalValue,
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
    uid: row.uid,
  }
}

export { insertTrade, type InsertTradeOptions }
