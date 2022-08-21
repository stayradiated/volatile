import { createMarketSourceForCurrency } from './open-exchange-rates.js'

const usdNzd = createMarketSourceForCurrency({
  base: 'USD',
  symbol: 'NZD',
})

const usdAud = createMarketSourceForCurrency({
  base: 'USD',
  symbol: 'AUD',
})

const audNzd = createMarketSourceForCurrency({
  base: 'AUD',
  symbol: 'NZD',
})

export { usdNzd, usdAud, audNzd }
