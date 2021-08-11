import type { Pool } from 'pg'

type Currency = 'USD' | 'NZD'
type CryptoSymbol = 'BTC' | 'ETH'
type BuySell = 'BUY' | 'SELL'

export { Pool, Currency, CryptoSymbol, BuySell }
