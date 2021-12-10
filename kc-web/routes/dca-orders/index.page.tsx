import { useState } from 'react'
import ReactDOM from 'react-dom'

import { Card } from '../../src/components/retro-ui'

import { Navigation } from '../../src/components/navigation'
import { DCAOrderFormCreate } from '../../src/components/dca-order-form-create'
import { DCAOrderFormEdit } from '../../src/components/dca-order-form-edit'
import { DCAOrderList } from '../../src/components/dca-order-list/index'

import App from '../../src/app'

const DCAOrders = () => {
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
      <Navigation />
      <DCAOrderList onEdit={setEditState} onCreate={handleOpenCreate} />
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
    <DCAOrders />
  </App>,
  document.querySelector('#root'),
)
