import type { DateTime } from 'luxon'

type DCAOrder = {
  UID: string
  userUID: string
  exchangeUID: string
  marketUID: string
  startAt: DateTime
  marketOffset: number
  dailyAverage: number
  minPrice: number | undefined
  maxPrice: number | undefined
  minAmount: number | undefined
  maxAmount: number | undefined
}

export { DCAOrder }
