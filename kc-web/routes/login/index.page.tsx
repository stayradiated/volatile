import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Row, Col } from 'antd'

import { setSession, Session } from '../../src/utils/session-store'
import { LoginForm } from '../../src/components/login-form/index'

import App from '../../src/app'

const Login = () => {
  const handleSession = (session: Session) => {
    setSession(session)
    window.location.replace('/')
  }

  return (
    <Layout>
      <Layout.Content>
        <Row>
          <Col span={6} offset={6}>
            <h1>Sign in</h1>
            <LoginForm onSession={handleSession} />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  )
}

ReactDOM.render(
  <App>
    <Login />
  </App>,
  document.querySelector('#root'),
)
