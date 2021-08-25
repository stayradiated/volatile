import { createMarketSourceForCurrency } from '../open-exchange-rates.js'

const USD_NZD = createMarketSourceForCurrency({
  base: 'USD',
  symbol: 'NZD',
})

export default USD_NZD
