import ky from 'ky-universal'

import * as privateAPI from './private-api.js'
export { privateAPI }

const ONE_MINUTE = 60 * 1000

const coinMarketCap = ky.create({
  prefixUrl: 'https://pro-api.coinmarketcap.com/',
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

export type Config = {
  apiKey: string
}

export type QuotesLatestOptions = {
  slug: string
  currency: string
}

type QuotesLatestResponse = {
  status: APIStatus
  data: Record<string, APICoin>
}

export type QuotesLatestResult = {
  requestDate: Date
  quoteDate: Date
  slug: string
  currency: string
  price: number
}

const quotesLatest = async (
  config: Config,
  options: QuotesLatestOptions,
  pastResult?: QuotesLatestResult,
): Promise<QuotesLatestResult> => {
  const { slug, currency } = options

  if (pastResult) {
    const delta = Date.now() - pastResult.quoteDate.getTime()
    if (delta < ONE_MINUTE) {
      return pastResult
    }
  }

  if (slug.toLowerCase() !== slug) {
    throw new Error(`Slug must always be in lower case, recieved "${slug}".`)
  }

  if (currency.toUpperCase() !== currency) {
    throw new Error(
      `Currency must always be in upper case, recieved "${currency}".`,
    )
  }

  const requestDate = new Date()

  const result: QuotesLatestResponse = await coinMarketCap
    .get('v1/cryptocurrency/quotes/latest', {
      searchParams: {
        slug,
        convert: currency,
      },
      headers: {
        'X-CMC_PRO_API_KEY': config.apiKey,
      },
    })
    .json()

  const quote = result.data['1']?.quote[currency]
  if (!quote) {
    throw new Error('Could not read quote back from response.')
  }

  const price = quote.price
  const quoteDate = new Date(quote.last_updated)

  return {
    requestDate,
    quoteDate,
    slug,
    currency,
    price,
  }
}

export { quotesLatest }
