import ReactDOM from 'react-dom'
import { Layout, Row, Col } from 'antd'

import { InsertDCAOrderForm } from '../../src/components/dca-order-form-insert/index'
import { DCAOrderList } from '../../src/components/dca-order-list/index'

import App from '../../src/app'

const DCAOrders = () => {
  return (
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
  )
}

ReactDOM.render(
  <App>
    <DCAOrders />
  </App>,
  document.querySelector('#root'),
)
