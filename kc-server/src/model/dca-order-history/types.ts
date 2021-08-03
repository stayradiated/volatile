import type { CryptoSymbol } from '../../types.js'

type DCAOrderHistory = {
  UID: string
  userUID: string
  dcaOrderUID: string
  orderUID: string | undefined
  symbol: CryptoSymbol
  marketPriceNZD: number
  marketOffset: number
  calculatedAmountNZD: number
  availableBalanceNZD: number
  description: string
}

export { DCAOrderHistory }
