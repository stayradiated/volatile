import * as db from 'zapatos/db'
import { assertOk } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import type { InsertTradeOptions } from './insert-trade.js'
import { insertTrade } from './insert-trade.js'

test('insertTrade', async (t) => {
  const { pool, make } = t.context
  const userUid = await make.user()
  const exchangeUid = await make.exchange()
  const orderUid = await make.order()

  const input: InsertTradeOptions = {
    userUid,
    exchangeUid,
    orderUid,
    timestamp: new Date(),
    tradeID: 'insert-trade.test',
    type: 'BUY',
    primaryCurrency: 'BTC',
    secondaryCurrency: 'NZD',
    volume: 0.876_543_21,
    price: 12_345.67,
    value: 10_821.51,
    fee: 0.2345,
    totalValue: 438_482,
  }

  const output = await insertTrade(pool, input)
  assertOk(output)

  t.like(output, input)
  t.is('string', typeof output.uid)

  const row = await db.selectExactlyOne('trade', { uid: output.uid }).run(pool)
  t.like(row, {
    uid: output.uid,
    user_uid: input.userUid,
    exchange_uid: input.exchangeUid,
    order_uid: input.orderUid,
    trade_id: input.tradeID,
    type: input.type,
    primary_currency: input.primaryCurrency,
    secondary_currency: input.secondaryCurrency,
    volume: input.volume,
    price: input.price,
    value: input.value,
    fee: input.fee,
    total_value: input.totalValue,
  })
  t.is('string', typeof row.created_at)
  t.is('string', typeof row.updated_at)
})
