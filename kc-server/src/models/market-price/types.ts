import type { Currency } from '../../types.js'

type MarketPrice = {
  timestamp: Date
  marketUID: string
  price: number
  currency: Currency
  symbol: string
  fxRate: number
  priceNZD: number
}

export { MarketPrice }
