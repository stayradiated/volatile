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
          timestamp: trade.timestamp.toJSDate(),
          user_uid: trade.userUID,
          exchange_uid: trade.exchangeUID,
          order_uid: trade.orderUID,
          trade_id: trade.tradeID,
          type: trade.type,
          asset_symbol: trade.assetSymbol,
          amount: trade.amount,
          price_nzd: trade.priceNZD,
          total_nzd: trade.totalNZD,
          fee_nzd: trade.feeNZD,
        },
        db.constraint('unique_trade_exchange_trade_id'),
        {
          updateColumns: [
            'updated_at',
            'timestamp',
            'type',
            'asset_symbol',
            'amount',
            'price_nzd',
            'total_nzd',
            'fee_nzd',
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
