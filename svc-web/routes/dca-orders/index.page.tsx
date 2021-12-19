import { useState } from 'react'
import ReactDOM from 'react-dom'

import { useSession } from '../../src/hooks/use-session'

import { Card } from '../../src/components/retro-ui'
import { Navigation } from '../../src/components/navigation'
import { DCAOrderFormCreate } from '../../src/components/dca-order-form-create'
import { DCAOrderFormEdit } from '../../src/components/dca-order-form-edit'
import { DCAOrderList } from '../../src/components/dca-order-list/index'
import { DCAOrderHistoryList } from '../../src/components/dca-order-history-list/index'

import App from '../../src/app'
import { AuthenticatedRoute } from '../../src/authenticated-route'

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
      {viewState && <DCAOrderHistoryList dcaOrderUID={viewState} />}
      {createState && (
        <Card>
          <DCAOrderFormCreate
            onFinish={handleCloseCreate}
            onCancel={handleCloseCreate}
          />
        </Card>
      )}
      {typeof editState === 'string' && (
        <Card>
          <DCAOrderFormEdit
            dcaOrderUID={editState}
            onFinish={handleCloseEdit}
            onCancel={handleCloseEdit}
          />
        </Card>
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
