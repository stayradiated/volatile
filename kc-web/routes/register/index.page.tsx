import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Row, Col } from 'antd'

import { RegisterForm } from '../../src/components/register-form/index'

import App from '../../src/app'

const Register = () => {
  const handleSession = () => {}

  return (
    <Layout>
      <Layout.Content>
        <Row>
          <Col span={6} offset={6}>
            <h1>Sign Up</h1>
            <RegisterForm onSession={handleSession} />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  )
}

ReactDOM.render(
  <App>
    <Register />
  </App>,
  document.querySelector('#root'),
)
