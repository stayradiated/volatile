import { setTimeout } from 'timers/promises'
import * as db from 'zapatos/db'
import type * as s from 'zapatos/schema'
import {
  createCachedFetchFn,
  marketPriceSources,
} from '@stayradiated/market-price'
import { readConfig } from '@stayradiated/kc-config'
import { v4 as uuidv4 } from 'uuid'

import pool from './pg-pool.js'

type InsertMarketPriceOptions = {
  date: Date
  marketName: string
  price: number
}

const insertMarketPrice = async (options: InsertMarketPriceOptions) => {
  const { date, marketName, price } = options

  const now = new Date()
  const marketPrice: s.market_price.Insertable = {
    id: uuidv4(),
    created_at: now,
    updated_at: now,
    date,
    market_name: marketName,
    price,
  }

  await db.sql<s.market_price.SQL>`
    INSERT INTO ${'market_price'} (${db.cols(marketPrice)})
    VALUES (${db.vals(marketPrice)})`.run(pool)
}

const main = async () => {
  const config = await readConfig(
    '/home/admin/dotfiles/apps/kiwi-coin/config.json.enc',
  )
  const fetchKiwiCoinPrice = createCachedFetchFn(
    marketPriceSources.kiwiCoin,
    {},
  )

  const fetchBinancePrice = createCachedFetchFn(marketPriceSources.binance, {})

  const fetchEasyCryptoPrice = createCachedFetchFn(
    marketPriceSources.easyCrypto,
    {},
  )

  const fetchUSDExchangeRate = createCachedFetchFn(
    marketPriceSources.openExchangeRates,
    config.openExchangeRates,
  )

  const fetchDassetPrice = createCachedFetchFn(marketPriceSources.dasset, {
    config: config.dasset,
  })

  const loop = async (): Promise<void> => {
    const date = new Date()

    const [kiwiCoinWorldwide, easyCrypto, binance, exchangeRate, dasset] =
      await Promise.all([
        fetchKiwiCoinPrice(),
        fetchEasyCryptoPrice(),
        fetchBinancePrice(),
        fetchUSDExchangeRate(),
        fetchDassetPrice(),
      ])

    await Promise.all([
      insertMarketPrice({
        date,
        marketName: 'kiwi-coin.com',
        price: kiwiCoinWorldwide,
      }),
      insertMarketPrice({
        date,
        marketName: 'easycrypto.ai',
        price: easyCrypto,
      }),
      insertMarketPrice({
        date,
        marketName: 'binance.us',
        price: binance * exchangeRate,
      }),
      insertMarketPrice({ date, marketName: 'dassetx.com', price: dasset }),
    ])

    await setTimeout(5000)
    return loop()
  }

  await loop()
}

main()
