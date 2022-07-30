type StripePrice = {
  ID: string
  createdAt: Date
  updatedAt: Date
  productID: string
  active: boolean
  billingScheme: string
  unitAmount: number | undefined
  currency: string
  nickname: string | undefined
  type: string
  recurring:
    | {
        aggregateUsage: string | undefined
        interval: string
        intervalCount: number
        usageType: string
      }
    | undefined
}

export type { StripePrice }
