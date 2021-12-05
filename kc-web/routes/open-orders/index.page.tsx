import ReactDOM from 'react-dom'

import { Card } from '../../src/components/retro-ui'
import { OpenOrderList } from '../../src/components/open-order-list/index'

import App from '../../src/app'

const OpenOrders = () => (
  <Card width={1000}>
    <h2>Open Orders</h2>
    <OpenOrderList />
  </Card>
)

ReactDOM.render(
  <App>
    <OpenOrders />
  </App>,
  document.querySelector('#root'),
)
