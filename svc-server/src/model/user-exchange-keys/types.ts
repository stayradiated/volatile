import { DateTime } from 'luxon'

type UserExchangeKeys<
  Keys extends Record<string, string> = Record<string, string>,
> = {
  UID: string
  userUID: string
  exchangeUID: string
  keys: Keys
  description: string
  invalidatedAt: DateTime | undefined
}

export { UserExchangeKeys }
