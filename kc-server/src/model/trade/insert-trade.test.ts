import * as db from 'zapatos/db'
import { DateTime } from 'luxon'
import { throwIfError } from '@stayradiated/error-boundary'

import test from '../../test-util/ava.js'

import { insertTrade, InsertTradeOptions } from './insert-trade.js'
import type { Trade } from './types.js'

test('insertTrade', async (t) => {
  const { pool, make } = t.context
  const userUID = await make.user()
  const exchangeUID = await make.exchange()
  const orderUID = await make.order()

  const input: InsertTradeOptions = {
    userUID,
    exchangeUID,
    orderUID,
    timestamp: DateTime.local(),
    tradeID: 'insert-trade.test',
    type: 'BUY',
    symbol: 'BTC',
    amount: 0.876_543_21,
    priceNZD: 12_345.67,
    totalNZD: 10_821.51,
    feeNZD: 0.2345,
  }

  const output = await throwIfError<Trade>(insertTrade(pool, input))

  t.like(output, input)
  t.is('string', typeof output.UID)

  const row = await db.selectExactlyOne('trade', { uid: output.UID }).run(pool)
  t.like(row, {
    uid: output.UID,
    user_uid: input.userUID,
    exchange_uid: input.exchangeUID,
    order_uid: input.orderUID,
    trade_id: input.tradeID,
    type: input.type,
    amount: input.amount,
    price_nzd: input.priceNZD,
    total_nzd: input.totalNZD,
    fee_nzd: input.feeNZD,
  })
  t.is('string', typeof row.created_at)
  t.is('string', typeof row.updated_at)
})
