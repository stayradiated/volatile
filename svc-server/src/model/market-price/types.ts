import type { DateTime } from 'luxon'

type MarketPrice = {
  timestamp: DateTime
  marketUID: string
  assetSymbol: string
  sourcePrice: number
  sourceCurrency: string
  fxRate: number
  price: number
  currency: string
}

export { MarketPrice }
