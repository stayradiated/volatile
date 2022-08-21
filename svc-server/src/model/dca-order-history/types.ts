type DcaOrderHistory = {
  uid: string
  userUid: string
  dcaOrderUid: string
  orderUid: string | undefined
  createdAt: Date
  updatedAt: Date
  primaryCurrency: string
  secondaryCurrency: string
  marketPrice: number
  marketOffset: number
  targetValue: number
  value: number
  availableBalance: number
  description: string
}

export { DcaOrderHistory }
