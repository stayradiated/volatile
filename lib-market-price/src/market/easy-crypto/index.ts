import { kanye, getResponseBodyJson } from '@volatile/kanye'

import type { MarketPriceSource } from '../../util/market-price-source.js'

const prefixUrl = 'https://r.easycrypto.nz/pub/'

type Options = {
  assetSymbol: string
  currency: string
}

type ApiResponse = {
  symbol: string
  ask: string
  bid: string
}

const marketSource: MarketPriceSource<Options> = {
  minCacheDurationMs: 30 * 1000,
  async fetch(options) {
    const { assetSymbol, currency } = options
    if (assetSymbol.toUpperCase() !== assetSymbol) {
      const error = new Error(
        `Asset symbol must be uppercase, received "${assetSymbol}".`,
      )
      return [error]
    }

    if (currency.toUpperCase() !== currency) {
      const error = new Error(
        `Currency must be uppercase, received "${currency}".`,
      )
      return [error]
    }

    const tradingPair = assetSymbol + currency

    const lastUpdated = new Date()

    const raw = await kanye(prefixUrl + `ticker/${tradingPair}`, {
      method: 'GET',
    })
    if (raw instanceof Error) {
      return [raw]
    }

    const result = getResponseBodyJson<ApiResponse>(raw)
    if (result instanceof Error) {
      const error = new Error(
        `Could not ticker price from easycrypto.ai
${JSON.stringify({ assetSymbol, currency })}`,
        {
          cause: result,
        },
      )
      return [error, raw]
    }

    // Const bid = Number.parseFloat(result.bid)
    const ask = Number.parseFloat(result.ask)
    // Const value = Math.round(((bid + ask) / 2) * 100) / 100
    const value = ask

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
