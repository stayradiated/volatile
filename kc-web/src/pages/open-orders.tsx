import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Row, Col } from 'antd'

import { OpenOrderList } from '../components/open-order-list/index'

import App from './_app'

const OpenOrders = () => (
  <App>
    <Layout>
      <Layout.Content>
        <Row>
          <Col span={12} offset={6}>
            <h1>Open Orders</h1>
            <OpenOrderList />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  </App>
)

ReactDOM.render(
  <React.StrictMode>
    <OpenOrders />
  </React.StrictMode>,
  document.querySelector('#root'),
)
