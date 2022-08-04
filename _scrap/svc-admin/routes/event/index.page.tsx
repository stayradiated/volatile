import ReactDOM from 'react-dom'

import { useSessionContext } from '../../src/utils/session-context'
import { LoginPage } from '../../src/components/LoginPage'
import { EventPage } from '../../src/components/EventPage'

import { App } from '../../src/app'

const Page = () => {
  const session = useSessionContext()

  if (!session.isAuthenticated) {
    return <LoginPage />
  }

  const url = new URL(window.document.location.href)
  const triggerName = url.searchParams.get('trigger')

  if (!triggerName) {
    return null
  }

  return <EventPage triggerName={triggerName} />
}

ReactDOM.render(
  <App>
    <Page />
  </App>,
  document.querySelector('#root'),
)
