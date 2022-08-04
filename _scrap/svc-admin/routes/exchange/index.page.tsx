import ReactDOM from 'react-dom'

import { useSessionContext } from '../../src/utils/session-context'
import { LoginPage } from '../../src/components/LoginPage'
import { ExchangeList } from '../../src/components/ExchangeList'
import { CurrencyList } from '../../src/components/CurrencyList'

import { App } from '../../src/app'

const Page = () => {
  const session = useSessionContext()

  if (!session.isAuthenticated) {
    return <LoginPage />
  }

  return (
    <>
      <ExchangeList />
      <CurrencyList />
    </>
  )
}

ReactDOM.render(
  <App>
    <Page />
  </App>,
  document.querySelector('#root'),
)
