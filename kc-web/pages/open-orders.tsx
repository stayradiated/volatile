import { Layout, Row, Col } from 'antd'

import { OpenOrderList } from '../components/open-order-list/index'

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

export default OpenOrders
