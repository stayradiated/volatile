type UserExchangeKeys<
  Keys extends Record<string, string> = Record<string, string>,
> = {
  uid: string
  userUid: string
  exchangeUid: string
  keys: Keys
  description: string
  invalidatedAt: Date | undefined
}

export type { UserExchangeKeys }
