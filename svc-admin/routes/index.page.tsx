import ReactDOM from 'react-dom'

import { useSessionContext } from '../src/utils/session-context'

import { Sidebar } from '../src/components/Sidebar'
import { LoginPage } from '../src/components/LoginPage'
import { App } from '../src/app'

const Page = () => {
  const session = useSessionContext()

  if (!session.isAuthenticated) {
    return <LoginPage />
  }

  return <Sidebar />
}

ReactDOM.render(
  <App>
    <Page />
  </App>,
  document.querySelector('#root'),
)
