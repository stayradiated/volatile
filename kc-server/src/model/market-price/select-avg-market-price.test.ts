import { DateTime } from 'luxon'
import { throwIfError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { selectAvgMarketPrice } from './select-avg-market-price.js'
import { insertMarketPrice } from './insert-market-price.js'

test('selectOpenOrdersForDCA: should return open orders', async (t) => {
  const { pool, make } = t.context
  const marketUID = await make.market()
  const assetSymbol = 'BTC'

  const makeMarketPrice = async (minutesAgo: number, priceNZD: number) => {
    const timestamp = DateTime.local().minus({ minutes: minutesAgo })
    return insertMarketPrice(pool, {
      timestamp,
      assetSymbol,
      marketUID,
      currency: 'NZD',
      fxRate: 1,
      price: 0,
      priceNZD,
    })
  }

  await makeMarketPrice(0, 10)
  await makeMarketPrice(2, 12)
  await makeMarketPrice(4, 14)
  await makeMarketPrice(5, 15)
  await makeMarketPrice(6, 16)
  await makeMarketPrice(8, 18)
  await makeMarketPrice(10, 20)

  // These should have no affect on the avg
  await makeMarketPrice(11, 100)
  await makeMarketPrice(12, 200)
  await makeMarketPrice(13, 300)

  const avgPrice = await throwIfError<number>(
    selectAvgMarketPrice(pool, { marketUID, assetSymbol }),
  )

  t.is(avgPrice, 15)
})
