import ReactDOM from 'react-dom'
import { Layout, Row, Col } from 'antd'

import { UserExchangeKeysForm } from '../../src/components/user-exchange-keys-form/index'
import { UserExchangeKeysList } from '../../src/components/user-exchange-keys-list/index'

import App from '../../src/app'

const Settings = () => {
  return (
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
  )
}

ReactDOM.render(
  <App>
    <Settings />
  </App>,
  document.querySelector('#root'),
)
