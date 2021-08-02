import type { Config } from '@stayradiated/kc-config'
import type { Pool } from 'pg'

type Currency = 'USD' | 'NZD'
type CryptoSymbol = 'BTC' | 'ETH'
type BuySell = 'BUY' | 'SELL'

export { Pool, Config, Currency, CryptoSymbol, BuySell }
