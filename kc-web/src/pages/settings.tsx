import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Row, Col } from 'antd'

import { UserExchangeKeysForm } from '../components/user-exchange-keys-form/index'
import { UserExchangeKeysList } from '../components/user-exchange-keys-list/index'

import App from './_app'

const Settings = () => {
  return (
    <App>
    <Layout>
      <Layout.Content>
        <Row>
          <Col span={12} offset={6}>
            <UserExchangeKeysList />
            <UserExchangeKeysForm />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
    </App>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Settings />
  </React.StrictMode>,
  document.getElementById('root')
)
