import type { DateTime } from 'luxon'

type DCAOrder = {
  UID: string
  userUID: string
  exchangeUID: string
  userExchangeKeysUID: string
  marketUID: string
  assetSymbol: string
  startAt: DateTime
  marketOffset: number
  dailyAverage: number
  minPriceNZD: number | undefined
  maxPriceNZD: number | undefined
  minAmountNZD: number | undefined
  maxAmountNZD: number | undefined
  enabledAt: DateTime | undefined
}

export { DCAOrder }
