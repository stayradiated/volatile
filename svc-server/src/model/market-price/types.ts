type MarketPrice = {
  timestamp: Date
  marketUid: string
  assetSymbol: string
  sourcePrice: number
  sourceCurrency: string
  fxRate: number
  price: number
  currency: string
}

export { MarketPrice }
