import ReactDOM from 'react-dom'

import { useSessionContext } from '../src/utils/session-context'
import { LoginPage } from '../src/components/LoginPage'
import { ExchangeList } from '../src/components/ExchangeList'

import { App } from '../src/app'

const Page = () => {
  const session = useSessionContext()

  if (!session.isAuthenticated) {
    return <LoginPage />
  }

  return (
    <ExchangeList />
  )
}

ReactDOM.render(<App><Page /></App>, document.querySelector('#root'))
