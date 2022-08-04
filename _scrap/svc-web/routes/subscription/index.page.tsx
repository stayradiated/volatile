import ReactDOM from 'react-dom'

import { useSession } from '../../src/hooks/use-session'

import { Card } from '../../src/components/retro-ui'
import { Navigation } from '../../src/components/navigation'
import { SubscriptionList } from '../../src/components/subscription-list'
import { SubscriptionPriceList } from '../../src/components/subscription-price-list'

import App from '../../src/app'
import { AuthenticatedRoute } from '../../src/authenticated-route'

const Subscription = () => {
  const session = useSession()

  return (
    <>
      <Navigation session={session} />
      <Card>
        <SubscriptionPriceList />
      </Card>
      <SubscriptionList />
    </>
  )
}

ReactDOM.render(
  <App>
    <AuthenticatedRoute>
      <Subscription />
    </AuthenticatedRoute>
  </App>,
  document.querySelector('#root'),
)
