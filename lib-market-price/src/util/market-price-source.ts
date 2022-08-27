import type { CachedFetchConfig } from './cached-fetch.js'

type MarketPriceSource<Options> = CachedFetchConfig<Options, number>

export type { MarketPriceSource }
