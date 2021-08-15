import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { Layout, Row, Col } from 'antd'

import { RegisterForm } from '../components/register-form/index'

const Register = () => {
  const router = useRouter()

  const handleSession = useCallback(() => {
    router.push('/')
  }, [router])

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

export default Register
