import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Row, Col } from 'antd'

import { setSession, Session } from '../utils/session-store'
import { LoginForm } from '../components/login-form/index'
import App from './_app'

const Login = () => {
  const handleSession = (session: Session) => {
    setSession(session)
  }

  return (
    <App>
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
    </App>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
)
