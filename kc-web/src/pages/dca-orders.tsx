import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Row, Col } from 'antd'

import { InsertDCAOrderForm } from '../components/dca-order-form-insert/index'
import { DCAOrderList } from '../components/dca-order-list/index'

import App from './_app'

const DCAOrders = () => {
  return (
    <App>
    <Layout>
      <Layout.Content>
        <Row>
          <Col span={24} offset={0}>
            <InsertDCAOrderForm />
            <DCAOrderList />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
    </App>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <DCAOrders />
  </React.StrictMode>,
  document.getElementById('root')
)
