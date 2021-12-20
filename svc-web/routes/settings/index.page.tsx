import ReactDOM from 'react-dom'
import { useState, Suspense, lazy } from 'react'

import { useSession } from '../../src/hooks/use-session'

import { Navigation } from '../../src/components/navigation'
import { UserExchangeKeysList } from '../../src/components/user-exchange-keys-list/index'

import { Card, Spin } from '../../src/components/retro-ui'

import App from '../../src/app'
import { AuthenticatedRoute } from '../../src/authenticated-route'

const UserExchangeKeysFormCreate = lazy(
  async () => import('../../src/components/user-exchange-keys-form-create'),
)
const UserExchangeKeysFormEdit = lazy(
  async () => import('../../src/components/user-exchange-keys-form-edit'),
)

const Settings = () => {
  const session = useSession()

  const [createState, setCreateState] = useState<boolean>(false)
  const [editState, setEditState] = useState<string | undefined>(undefined)

  const handleOpenCreate = () => {
    setCreateState(true)
  }

  const handleCloseCreate = () => {
    setCreateState(false)
  }

  const handleCloseEdit = () => {
    setEditState(undefined)
  }

  return (
    <>
      <Navigation session={session} />
      <UserExchangeKeysList onCreate={handleOpenCreate} onEdit={setEditState} />
      {createState && (
        <Suspense fallback={<Spin />}>
          <Card width={400}>
            <UserExchangeKeysFormCreate
              onFinish={handleCloseCreate}
              onCancel={handleCloseCreate}
            />
          </Card>
        </Suspense>
      )}
      {typeof editState === 'string' && (
        <Suspense fallback={<Spin />}>
          <Card width={400}>
            <UserExchangeKeysFormEdit
              userExchangeKeysUID={editState}
              onFinish={handleCloseEdit}
              onCancel={handleCloseEdit}
            />
          </Card>
        </Suspense>
      )}
    </>
  )
}

ReactDOM.render(
  <App>
    <AuthenticatedRoute>
      <Settings />
    </AuthenticatedRoute>
  </App>,
  document.querySelector('#root'),
)
