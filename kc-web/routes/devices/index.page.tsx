import ReactDOM from 'react-dom'
import { useState } from 'react'

import { Navigation } from '../../src/components/navigation'
import { UserDeviceList } from '../../src/components/user-device-list'
import { UserDeviceFormEdit } from '../../src/components/user-device-form-edit'

import { Card } from '../../src/components/retro-ui'

import App from '../../src/app'

const Devices = () => {
  const [editState, setEditState] = useState<string | undefined>(undefined)

  const handleCloseEdit = () => {
    setEditState(undefined)
  }

  return (
    <>
      <Navigation />
      <Card width={1000}>
        <h2>Devices</h2>
        <UserDeviceList onEdit={setEditState} />
      </Card>
      {typeof editState === 'string' && (
        <Card width={400}>
          <UserDeviceFormEdit userDeviceUID={editState}
            onCancel={handleCloseEdit}
            onFinish={handleCloseEdit}
          />
        </Card>
      )}
    </>
  )
}

ReactDOM.render(
  <App>
    <Devices />
  </App>,
  document.querySelector('#root'),
)
