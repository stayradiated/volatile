import ReactDOM from 'react-dom'
import { useState, Suspense, lazy } from 'react'

import { useSession } from '../../src/hooks/use-session'

import { Navigation } from '../../src/components/navigation'
import { UserDeviceList } from '../../src/components/user-device-list'

import { Card, Spin } from '../../src/components/retro-ui'

import App from '../../src/app'
import { AuthenticatedRoute } from '../../src/authenticated-route'

const UserDeviceFormEdit = lazy(
  async () => import('../../src/components/user-device-form-edit'),
)

const Devices = () => {
  const session = useSession()

  const [editState, setEditState] = useState<string | undefined>(undefined)

  const handleCloseEdit = () => {
    setEditState(undefined)
  }

  return (
    <>
      <Navigation session={session} />
      <Card width={1000}>
        <h2>Devices</h2>
        <UserDeviceList onEdit={setEditState} />
      </Card>
      {typeof editState === 'string' && (
        <Suspense fallback={<Spin />}>
          <Card width={400}>
            <UserDeviceFormEdit
              userDeviceUID={editState}
              onCancel={handleCloseEdit}
              onFinish={handleCloseEdit}
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
      <Devices />
    </AuthenticatedRoute>
  </App>,
  document.querySelector('#root'),
)
