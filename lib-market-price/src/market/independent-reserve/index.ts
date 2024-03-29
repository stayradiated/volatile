import * as ir from '@volatile/independent-reserve-api'
import { parseISO } from 'date-fns'

import type { MarketPriceSource } from '../../util/market-price-source.js'

type Options = {
  assetSymbol: string
  currency: string
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDurationMs: 30 * 1000,
  async fetch(options) {
    const { assetSymbol, currency } = options

    const [result, raw] = await ir.getMarketSummary({
      primaryCurrencyCode: assetSymbol,
      secondaryCurrencyCode: currency,
    })
    if (result instanceof Error) {
      return [result, raw]
    }

    const value = result.CurrentHighestBidPrice
    const lastUpdated = parseISO(result.CreatedTimestampUtc)

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
export type { Options }
