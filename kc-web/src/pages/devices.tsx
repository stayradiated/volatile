import React from 'react'
import ReactDOM from 'react-dom'

import { UserDeviceList } from '../components/user-device-list/index'

import App from './_app'

const Devices = () => (
  <App>
    <h1>Devices</h1>
    <UserDeviceList />
  </App>
)

ReactDOM.render(
  <React.StrictMode>
    <Devices />
  </React.StrictMode>,
  document.getElementById('root')
)
