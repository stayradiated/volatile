import { useState } from 'react'
import ReactDOM from 'react-dom'

import { UserExchangeKeysFormCreate } from '../../src/components/user-exchange-keys-form-create/index'
import { UserExchangeKeysFormEdit } from '../../src/components/user-exchange-keys-form-edit/index'
import { UserExchangeKeysList } from '../../src/components/user-exchange-keys-list/index'
import { Card } from '../../src/components/retro-ui'

import App from '../../src/app'

const Settings = () => {
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
      <Card width={1400}>
        <UserExchangeKeysList
          onCreate={handleOpenCreate}
          onEdit={setEditState}
        />
      </Card>
      {createState && (
        <Card width={400}>
          <UserExchangeKeysFormCreate
            onFinish={handleCloseCreate}
            onCancel={handleCloseCreate}
          />
        </Card>
      )}
      {typeof editState === 'string' && (
        <Card width={400}>
          <UserExchangeKeysFormEdit
            userExchangeKeysUID={editState}
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
    <Settings />
  </App>,
  document.querySelector('#root'),
)
