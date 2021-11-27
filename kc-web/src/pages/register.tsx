import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Row, Col } from 'antd'

import { RegisterForm } from '../components/register-form/index'

import App from './_app'

const Register = () => {
  const handleSession = () => {}

  return (
    <App>
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
    </App>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
  document.querySelector('#root'),
)
