type Balance = {
  UID: string
  createdAt: Date
  updatedAt: Date
  userUID: string
  exchangeUID: string
  userExchangeKeysUID: string
  currencySymbol: string
  totalBalance: number
  availableBalance: number
}

export type { Balance }
