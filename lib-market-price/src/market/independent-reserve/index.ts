import * as ir from '@volatile/independent-reserve-api'
import { parseISO } from 'date-fns'

import { MarketPriceSource } from '../../util/market-price-source.js'

type Options = {
  assetSymbol: string
  currency: string
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDurationMs: 30 * 1000,
  fetch: async (options) => {
    const { assetSymbol, currency } = options

    const [result] = await ir.getMarketSummary({
      primaryCurrencyCode: assetSymbol,
      secondaryCurrencyCode: currency,
    })
    if (result instanceof Error) {
      return result
    }

    const value = result.CurrentHighestBidPrice
    const lastUpdated = parseISO(result.CreatedTimestampUtc)

    return {
      value,
      lastUpdated,
    }
  },
}

export default marketSource
export { Options }
