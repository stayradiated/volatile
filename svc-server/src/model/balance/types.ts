type Balance = {
  uid: string
  createdAt: Date
  updatedAt: Date
  userUid: string
  exchangeUid: string
  userExchangeKeysUid: string
  currencySymbol: string
  totalBalance: number
  availableBalance: number
}

export type { Balance }
