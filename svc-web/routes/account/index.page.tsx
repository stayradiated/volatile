import ReactDOM from 'react-dom'

import { useSession } from '../../src/hooks/use-session'

import { UserFormEdit } from '../../src/components/user-form-edit'
import { UserForm2FA } from '../../src/components/user-form-2fa'
import { UserFormDelete } from '../../src/components/user-form-delete'
import { Card } from '../../src/components/retro-ui'
import { Navigation } from '../../src/components/navigation'

import App from '../../src/app'
import { AuthenticatedRoute } from '../../src/authenticated-route'

const Account = () => {
  const session = useSession()

  if (session.role !== 'user') {
    return <>You must be logged in to view this page</>
  }

  return (
    <>
      <Navigation session={session} />
      <Card>
        <h2>Account</h2>
        <UserFormEdit session={session} />
      </Card>
      <Card>
        <UserForm2FA />
      </Card>
      <Card>
        <UserFormDelete />
      </Card>
    </>
  )
}

ReactDOM.render(
  <App>
    <AuthenticatedRoute>
      <Account />
    </AuthenticatedRoute>
  </App>,
  document.querySelector('#root'),
)
