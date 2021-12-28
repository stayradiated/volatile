type DCAOrder = {
  UID: string
  userUID: string
  exchangeUID: string
  userExchangeKeysUID: string
  marketUID: string
  primaryCurrency: string
  secondaryCurrency: string
  startAt: Date
  marketOffset: number
  dailyAverage: number
  intervalMs: number
  minPrice: number | undefined
  maxPrice: number | undefined
  minValue: number | undefined
  maxValue: number | undefined
  enabledAt: Date | undefined
  nextRunAt: Date | undefined
  lastRunAt: Date | undefined
}

export { DCAOrder }
