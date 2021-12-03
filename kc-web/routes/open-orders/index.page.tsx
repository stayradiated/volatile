import ReactDOM from 'react-dom'
import { Layout, Row, Col } from 'antd'

import { OpenOrderList } from '../../src/components/open-order-list/index'

import App from '../../src/app'

const OpenOrders = () => (
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
)

ReactDOM.render(
  <App>
    <OpenOrders />
  </App>,
  document.querySelector('#root'),
)
