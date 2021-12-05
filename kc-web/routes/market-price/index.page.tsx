import ReactDOM from 'react-dom'

import { Card } from '../../src/components/retro-ui'
import { MarketPriceChart } from '../../src/components/market-price-chart'

import App from '../../src/app'

const MarketPrice = () => (
  <>
    <Card width={1000}>
      <MarketPriceChart primaryCurrency="BTC" secondaryCurrency="NZD" />
    </Card>
    <Card width={1000}>
      <MarketPriceChart primaryCurrency="ETH" secondaryCurrency="NZD" />
    </Card>
  </>
)

ReactDOM.render(
  <App>
    <MarketPrice />
  </App>,
  document.querySelector('#root'),
)
