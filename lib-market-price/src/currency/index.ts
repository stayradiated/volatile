import { createMarketSourceForCurrency } from './open-exchange-rates.js'

const USD_NZD = createMarketSourceForCurrency({
  base: 'USD',
  symbol: 'NZD',
})

const USD_AUD = createMarketSourceForCurrency({
  base: 'USD',
  symbol: 'AUD',
})

const AUD_NZD = createMarketSourceForCurrency({
  base: 'AUD',
  symbol: 'NZD',
})

export { USD_NZD, USD_AUD, AUD_NZD }
