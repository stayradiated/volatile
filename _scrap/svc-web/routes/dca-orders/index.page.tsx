import { lazy, useState, Suspense } from 'react'
import ReactDOM from 'react-dom'

import { useSession } from '../../src/hooks/use-session'

import { Card, Spin } from '../../src/components/retro-ui'
import { Navigation } from '../../src/components/navigation'
import { DCAOrderList } from '../../src/components/dca-order-list/index'

import App from '../../src/app'
import { AuthenticatedRoute } from '../../src/authenticated-route'

const DCAOrderFormCreate = lazy(
  async () => import('../../src/components/dca-order-form-create'),
)
const DCAOrderFormEdit = lazy(
  async () => import('../../src/components/dca-order-form-edit'),
)
const DCAOrderHistoryList = lazy(
  async () => import('../../src/components/dca-order-history-list'),
)

const DCAOrders = () => {
  const session = useSession()

  const [createState, setCreateState] = useState<boolean>(false)
  const [editState, setEditState] = useState<string | undefined>(undefined)
  const [viewState, setViewState] = useState<string | undefined>(undefined)

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
      <DCAOrderList
        onEdit={setEditState}
        onCreate={handleOpenCreate}
        onView={setViewState}
      />
      {viewState && (
        <Suspense fallback={<Spin />}>
          <DCAOrderHistoryList dcaOrderUID={viewState} />
        </Suspense>
      )}
      {createState && (
        <Suspense fallback={<Spin />}>
          <Card>
            <DCAOrderFormCreate
              onFinish={handleCloseCreate}
              onCancel={handleCloseCreate}
            />
          </Card>
        </Suspense>
      )}
      {typeof editState === 'string' && (
        <Suspense fallback={<Spin />}>
          <Card>
            <DCAOrderFormEdit
              dcaOrderUID={editState}
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
      <DCAOrders />
    </AuthenticatedRoute>
  </App>,
  document.querySelector('#root'),
)
