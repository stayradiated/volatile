import * as db from 'zapatos/db'
import { DateTime } from 'luxon'
import { throwIfError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

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
    primaryCurrency: 'BTC',
    secondaryCurrency: 'NZD',
    volume: 0.876_543_21,
    price: 12_345.67,
    value: 10_821.51,
    fee: 0.2345,
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
    primary_currency: input.primaryCurrency,
    secondary_currency: input.secondaryCurrency,
    volume: input.volume,
    price: input.price,
    value: input.value,
    fee: input.fee,
  })
  t.is('string', typeof row.created_at)
  t.is('string', typeof row.updated_at)
})
