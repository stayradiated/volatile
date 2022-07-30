type StripeSubscription = {
  ID: string
  createdAt: Date
  updatedAt: Date
  customerID: string
  priceID: string
  quantity: number
  cancelAt: Date | undefined
  canceledAt: Date | undefined
  cancelAtPeriodEnd: boolean
  currentPeriodEnd: Date
  currentPeriodStart: Date
  description: string | undefined
  status: string
}

export type { StripeSubscription }
