import {
  Market,
  MARKET_BINANCE_US,
  MARKET_DASSET,
  MARKET_KIWI_COIN,
  MARKET_EASY_CRYPTO,
  MARKET_INDEPENDENT_RESERVE,
  MARKET_KRAKEN,
} from '../../model/market/index.js'

type Currency = 'AUD' | 'NZD' | 'USD'
type AssetSymbol = 'BTC' | 'ETH'

type TradingPair = [AssetSymbol, Currency]
type CurrencyPair = [Currency, Currency]

type MarketPriceConfig = {
  market: Market
  pair: TradingPair
  convert?: CurrencyPair
}

const AUD: Currency = 'AUD'
const NZD: Currency = 'NZD'
const USD: Currency = 'USD'

const BTC: AssetSymbol = 'BTC'
const ETH: AssetSymbol = 'ETH'

const BTC_AUD: TradingPair = [BTC, AUD]
const BTC_NZD: TradingPair = [BTC, NZD]
const BTC_USD: TradingPair = [BTC, USD]
const ETH_AUD: TradingPair = [ETH, AUD]
const ETH_NZD: TradingPair = [ETH, NZD]
const ETH_USD: TradingPair = [ETH, USD]

const USD_NZD: CurrencyPair = [USD, NZD]
const USD_AUD: CurrencyPair = [USD, AUD]
const AUD_NZD: CurrencyPair = [AUD, NZD]

const marketPriceConfigList: MarketPriceConfig[] = [
  { market: MARKET_BINANCE_US, pair: BTC_USD, convert: USD_AUD },
  { market: MARKET_BINANCE_US, pair: BTC_USD, convert: USD_NZD },
  { market: MARKET_BINANCE_US, pair: ETH_USD, convert: USD_AUD },
  { market: MARKET_BINANCE_US, pair: ETH_USD, convert: USD_NZD },
  { market: MARKET_DASSET, pair: BTC_NZD },
  { market: MARKET_DASSET, pair: ETH_NZD },
  { market: MARKET_EASY_CRYPTO, pair: BTC_NZD },
  { market: MARKET_EASY_CRYPTO, pair: ETH_NZD },
  { market: MARKET_INDEPENDENT_RESERVE, pair: BTC_AUD },
  { market: MARKET_INDEPENDENT_RESERVE, pair: BTC_AUD, convert: AUD_NZD },
  { market: MARKET_INDEPENDENT_RESERVE, pair: BTC_NZD },
  { market: MARKET_INDEPENDENT_RESERVE, pair: ETH_AUD },
  { market: MARKET_INDEPENDENT_RESERVE, pair: ETH_AUD, convert: AUD_NZD },
  { market: MARKET_INDEPENDENT_RESERVE, pair: ETH_NZD },
  { market: MARKET_KIWI_COIN, pair: BTC_NZD },
  { market: MARKET_KRAKEN, pair: BTC_USD, convert: USD_NZD },
  { market: MARKET_KRAKEN, pair: BTC_USD, convert: USD_AUD },
]

export {
  marketPriceConfigList,
  AUD,
  NZD,
  USD,
  BTC,
  ETH,
  BTC_AUD,
  BTC_NZD,
  BTC_USD,
  ETH_AUD,
  ETH_NZD,
  USD_NZD,
  USD_AUD,
  AUD_NZD,
}

export type {
  TradingPair,
  CurrencyPair,
  Currency,
  AssetSymbol,
  MarketPriceConfig,
}
