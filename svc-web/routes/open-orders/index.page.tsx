import ReactDOM from 'react-dom'

import { useSession } from '../../src/hooks/use-session'

import { Navigation } from '../../src/components/navigation'
import { Card } from '../../src/components/retro-ui'
import { OpenOrderList } from '../../src/components/open-order-list/index'

import App from '../../src/app'
import { AuthenticatedRoute } from '../../src/authenticated-route'

const OpenOrders = () => {
  const session = useSession()

  return (
  <>
    <Navigation session={session} />
    <Card width={1000}>
      <h2>Open Orders</h2>
      <OpenOrderList />
    </Card>
  </>
)
}

ReactDOM.render(
  <App>
    <AuthenticatedRoute>
      <OpenOrders />
    </AuthenticatedRoute>
  </App>,
  document.querySelector('#root'),
)
