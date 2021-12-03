import React from 'react'
import ReactDOM from 'react-dom'

import { UserDeviceList } from '../../src/components/user-device-list/index'

import App from '../../src/app'

const Devices = () => (
  <>
    <h1>Devices</h1>
    <UserDeviceList />
  </>
)

ReactDOM.render(
  <App>
    <Devices />
  </App>,
  document.querySelector('#root'),
)
