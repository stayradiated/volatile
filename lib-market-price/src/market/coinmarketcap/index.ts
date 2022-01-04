import { kanye, getResponseBodyJSON, APIError } from '@volatile/kanye'
import { parseISO } from 'date-fns'

import { MarketPriceSource } from '../../util/market-price-source.js'

const prefixUrl = 'https://pro-api.coinmarketcap.com/'

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
  minCacheDurationMs: 60 * 1000,
  fetch: async (options) => {
    const { apiKey } = options

    const slug = 'bitcoin'
    const currency = 'NZD'

    const raw = await kanye('v1/cryptocurrency/quotes/latest', {
      method: 'GET',
      prefixUrl,
      searchParams: {
        slug,
        convert: currency,
      },
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
      },
    })
    if (raw instanceof Error) {
      return [raw]
    }

    const result = getResponseBodyJSON<APIResponse>(raw)
    if (result instanceof Error) {
      const error = new APIError({
        message: 'Could not fetch market price from coinmarketcap.com',
        cause: result,
        context: {
          slug,
          currency,
        },
      })
      return [error, raw]
    }

    const quote = result.data['1']?.quote[currency]
    if (!quote) {
      const error = new Error('Could not read quote back from response.')
      return [error, raw]
    }

    const value = quote.price
    const lastUpdated = parseISO(quote.last_updated)

    return [
      {
        value,
        lastUpdated,
      },
      raw,
    ]
  },
}

export default marketSource
export { CoinMarketCapConfig }

export * as privateAPI from './private-api.js'
