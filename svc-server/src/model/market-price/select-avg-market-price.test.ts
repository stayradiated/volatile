import { throwIfError } from '@stayradiated/error-boundary'
import { subMinutes } from 'date-fns'

import { test } from '../../test-util/ava.js'

import { selectAvgMarketPrice } from './select-avg-market-price.js'

test('selectAvgMarketPrice: should return avg price', async (t) => {
  const { pool, make } = t.context
  const marketUID = await make.market({
    ID: 'avg-market-avg-price.test',
    name: 'selectAvgMarketPrice',
  })
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

  // These should have no affect on the avg
  await makeMarketPrice(11, 100)
  await makeMarketPrice(12, 200)
  await makeMarketPrice(13, 300)

  const avgPrice = await throwIfError<number>(
    selectAvgMarketPrice(pool, {
      marketUID,
      assetSymbol,
      currency,
      minutes: 10,
    }),
  )

  t.is(avgPrice, 15)
})
