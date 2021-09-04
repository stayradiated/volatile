type DCAOrderHistory = {
  UID: string
  userUID: string
  dcaOrderUID: string
  orderUID: string | undefined
  primaryCurrency: string
  secondaryCurrency: string
  marketPrice: number
  marketOffset: number
  targetValue: number
  value: number
  availableBalance: number
  description: string
}

export { DCAOrderHistory }
