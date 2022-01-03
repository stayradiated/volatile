import ReactDOM from 'react-dom'

import { useSession } from '../../src/hooks/use-session'

import { Navigation } from '../../src/components/navigation'
import { ExchangeList } from '../../src/components/exchange-list'

import App from '../../src/app'
import { AuthenticatedRoute } from '../../src/authenticated-route'

const Exchanges = () => {
  const session = useSession()

  return (
    <>
      <Navigation session={session} />
      <ExchangeList />
    </>
  )
}

ReactDOM.render(
  <App>
    <AuthenticatedRoute>
      <Exchanges />
    </AuthenticatedRoute>
  </App>,
  document.querySelector('#root'),
)
