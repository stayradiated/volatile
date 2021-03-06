import { randomUUID } from 'crypto'
import * as db from 'zapatos/db'
import type { Except } from 'type-fest'
import { errorBoundary } from '@stayradiated/error-boundary'

import type { Pool } from '../../types.js'
import type { Trade } from './types.js'

type UpsertTradeOptions = Except<Trade, 'UID'>

const upsertTrade = async (
  pool: Pool,
  trade: UpsertTradeOptions,
): Promise<Trade | Error> => {
  const row = await errorBoundary(async () =>
    db
      .upsert(
        'trade',
        {
          uid: randomUUID(),
          created_at: new Date(),
          updated_at: new Date(),
          timestamp: trade.timestamp,
          user_uid: trade.userUID,
          exchange_uid: trade.exchangeUID,
          order_uid: trade.orderUID,
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
        db.constraint('unique_trade_exchange_trade_id'),
        {
          updateColumns: [
            'updated_at',
            'timestamp',
            'type',
            'primary_currency',
            'secondary_currency',
            'volume',
            'price',
            'value',
            'fee',
            'total_value',
          ],
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

export { upsertTrade, UpsertTradeOptions }
