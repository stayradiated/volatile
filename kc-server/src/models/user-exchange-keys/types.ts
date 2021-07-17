import { DateTime } from 'luxon'

type UserExchangeKeys = {
  UID: string
  userUID: string
  exchangeUID: string
  keys: Record<string, string>
  description: string
  invalidatedAt: DateTime | undefined
}

export { UserExchangeKeys }
