import ReactDOM from 'react-dom'

import { useSessionContext } from '../../src/utils/session-context'
import { LoginPage } from '../../src/components/LoginPage'
import { UserList } from '../../src/components/UserList'

import { App } from '../../src/app'

const Page = () => {
  const session = useSessionContext()

  if (!session.isAuthenticated) {
    return <LoginPage />
  }

  return (
    <>
      <UserList />
    </>
  )
}

ReactDOM.render(
  <App>
    <Page />
  </App>,
  document.querySelector('#root'),
)
