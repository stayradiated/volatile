import { createMarketSourceForCurrency } from '../open-exchange-rates.js'

const USD_NZD = createMarketSourceForCurrency({
  base: 'USD',
  symbol: 'NZD',
})

const USD_AUD = createMarketSourceForCurrency({
  base: 'USD',
  symbol: 'AUD',
})

export {
  USD_NZD,
  USD_AUD
}
