type MarketPrice = {
  timestamp: Date
  marketUID: string
  assetSymbol: string
  sourcePrice: number
  sourceCurrency: string
  fxRate: number
  price: number
  currency: string
}

export { MarketPrice }
