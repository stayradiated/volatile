import { Layout, Row, Col } from 'antd'
import { useRouter } from 'next/router'

import { setSession, Session } from '../utils/session-store'
import { LoginForm } from '../components/login-form/index'

const Login = () => {
  const router = useRouter()

  const handleSession = (session: Session) => {
    setSession(session)
    router.push('/')
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

export default Login
