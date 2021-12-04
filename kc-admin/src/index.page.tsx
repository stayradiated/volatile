import ReactDOM from 'react-dom'

import { useSessionContext } from './utils/session-context'

import { Sidebar } from './components/Sidebar'
import { LoginPage } from './components/LoginPage'
import { App } from './app'

const Page = () => {
  const session = useSessionContext()
  console.log(session)

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
