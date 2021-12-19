import type { DateTime } from 'luxon'

type DCAOrder = {
  UID: string
  userUID: string
  exchangeUID: string
  userExchangeKeysUID: string
  marketUID: string
  primaryCurrency: string
  secondaryCurrency: string
  startAt: DateTime
  marketOffset: number
  dailyAverage: number
  minPrice: number | undefined
  maxPrice: number | undefined
  minValue: number | undefined
  maxValue: number | undefined
  enabledAt: DateTime | undefined
}

export { DCAOrder }
