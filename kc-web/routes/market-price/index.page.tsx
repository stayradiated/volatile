import ReactDOM from 'react-dom'

import { Card } from '../../src/components/retro-ui'
import { MarketPriceChart } from '../../src/components/market-price-chart'
import { MarketPriceChartCalc } from '../../src/components/market-price-chart-calc'
import { Navigation } from '../../src/components/navigation'

import App from '../../src/app'

const MarketPrice = () => (
  <>
    <Navigation />
    <Card width={1000}>
      <MarketPriceChartCalc primaryCurrency="BTC" secondaryCurrency="NZD" />
    </Card>
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
