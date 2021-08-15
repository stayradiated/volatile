import type { DateTime } from 'luxon'
import type { Currency } from '../../types.js'

type MarketPrice = {
  timestamp: DateTime
  marketUID: string
  price: number
  currency: Currency
  assetSymbol: string
  fxRate: number
  priceNZD: number
}

export { MarketPrice }
