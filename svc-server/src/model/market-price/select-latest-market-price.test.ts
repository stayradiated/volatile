import { subMinutes } from 'date-fns'
import { throwIfError } from '@stayradiated/error-boundary'

import { test } from '../../test-util/ava.js'

import { selectLatestMarketPrice } from './select-latest-market-price.js'

test('selectOpenOrdersForDCA: should return open orders', async (t) => {
  const { pool, make } = t.context
  const marketUID = await make.market()
  const assetSymbol = 'BTC'
  const currency = 'NZD'

  // Same asset symbol, different currency
  await make.marketPrice({
    timestamp: subMinutes(new Date(), 2),
    assetSymbol: 'BTC',
    currency: 'AUD',
    marketUID,
    price: 1_000_000,
  })

  // Same currency, different asset symbol
  await make.marketPrice({
    timestamp: subMinutes(new Date(), 2),
    assetSymbol: 'ETH',
    currency: 'NZD',
    marketUID,
    price: 1,
  })

  const makeMarketPrice = async (minutesAgo: number, price: number) => {
    const timestamp = subMinutes(new Date(), minutesAgo)
    await make.marketPrice({
      timestamp,
      assetSymbol,
      currency,
      marketUID,
      price,
    })
  }

  await makeMarketPrice(0, 10)
  await makeMarketPrice(2, 12)
  await makeMarketPrice(4, 14)
  await makeMarketPrice(5, 15)
  await makeMarketPrice(6, 16)
  await makeMarketPrice(8, 18)
  await makeMarketPrice(10, 20)

  // These should have no affect on the latest
  await makeMarketPrice(11, 100)
  await makeMarketPrice(12, 200)
  await makeMarketPrice(13, 300)

  const latestPrice = await throwIfError<number>(
    selectLatestMarketPrice(pool, {
      marketUID,
      assetSymbol,
      currency,
    }),
  )

  t.is(latestPrice, 10)
})
