import { useState } from 'react'
import ReactDOM from 'react-dom'

import { Card } from '../../src/components/retro-ui'

import { DCAOrderFormCreate } from '../../src/components/dca-order-form-create'
import { DCAOrderFormEdit } from '../../src/components/dca-order-form-edit'
import { DCAOrderList } from '../../src/components/dca-order-list/index'

import App from '../../src/app'

const DCAOrders = () => {
  const [editState, setEditState] = useState<string | undefined>(undefined)

  return (
    <>
      <Card width={1000}>
        <DCAOrderList onEdit={setEditState} />
      </Card>
      {editState && (
        <Card>
          <DCAOrderFormEdit dcaOrderUID={editState} />
        </Card>
      )}
      <Card>
        <DCAOrderFormCreate />
      </Card>
    </>
  )
}

ReactDOM.render(
  <App>
    <DCAOrders />
  </App>,
  document.querySelector('#root'),
)
