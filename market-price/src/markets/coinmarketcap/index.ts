import ky from 'ky-universal'
import debug from 'debug'
import { DateTime, Duration } from 'luxon'
import { errorBoundary } from '@stayradiated/error-boundary'

import { createDebugHooks } from '../../utils/hooks.js'
import { MarketPriceSource } from '../../utils/market-price-source.js'

import * as privateAPI from './private-api.js'

const log = debug('market-price:coin-market-cap')

const coinMarketCap = ky.create({
  prefixUrl: 'https://pro-api.coinmarketcap.com/',
  hooks: createDebugHooks(log),
})

type APIStatus = {
  timestamp: string
  error_code: number
  error_message: string | null
  elapsed: number
  credit_count: number
  notice: string | null
}

type APIQuote = {
  price: number
  volume_24h: number
  percent_change_1h: number
  percent_change_24h: number
  percent_change_7d: number
  percent_change_30d: number
  percent_change_60d: number
  percent_change_90d: number
  market_cap: number
  last_updated: string
}

type APICoin = {
  id: number
  name: string
  symbol: string
  slug: string
  num_market_pairs: number
  date_added: string
  tags: string[]
  max_supply: number
  circulating_supply: number
  total_supply: number
  is_active: number
  platform: string | null
  cmc_rank: number
  is_fiat: number
  last_updated: string
  quote: Record<string, APIQuote>
}

type APIResponse = {
  status: APIStatus
  data: Record<string, APICoin>
}

type CoinMarketCapConfig = {
  apiKey: string
}

const marketSource: MarketPriceSource<CoinMarketCapConfig> = {
  minCacheDuration: Duration.fromISOTime('00:01:00'),
  fetch: async (options) => {
    const { apiKey } = options

    const slug = 'bitcoin'
    const currency = 'NZD'

    const result = await errorBoundary<APIResponse>(async () =>
      coinMarketCap
        .get('v1/cryptocurrency/quotes/latest', {
          searchParams: {
            slug,
            convert: currency,
          },
          headers: {
            'X-CMC_PRO_API_KEY': apiKey,
          },
        })
        .json(),
    )

    if (result instanceof Error) {
      log(result.message)
      return result
    }

    const quote = result.data['1']?.quote[currency]
    if (!quote) {
      return new Error('Could not read quote back from response.')
    }

    const value = quote.price
    const lastUpdated = DateTime.fromISO(quote.last_updated)

    return {
      value,
      lastUpdated,
    }
  },
}

export default marketSource
export { CoinMarketCapConfig, privateAPI }
