import * as ir from '@stayradiated/independent-reserve-api'
import { DateTime, Duration } from 'luxon'

import { MarketPriceSource } from '../../util/market-price-source.js'

type Options = {
  symbol: string
  currency: string
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDuration: Duration.fromISOTime('00:00:30', {}),
  fetch: async (options) => {
    const { symbol, currency } = options

    const result = await ir.getMarketSummary({
      primaryCurrencyCode: symbol,
      secondaryCurrencyCode: currency,
    })
    if (result instanceof Error) {
      return result
    }

    const value = result.LastPrice
    const lastUpdated = DateTime.fromISO(result.CreatedTimestampUtc)

    return {
      value,
      lastUpdated,
    }
  },
}

export default marketSource
export { Options }
