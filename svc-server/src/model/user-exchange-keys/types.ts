type UserExchangeKeys<
  Keys extends Record<string, string> = Record<string, string>,
> = {
  UID: string
  userUID: string
  exchangeUID: string
  keys: Keys
  description: string
  invalidatedAt: Date | undefined
}

export { UserExchangeKeys }
