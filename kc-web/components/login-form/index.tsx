import { Form, Input, Button, Alert } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useCallback, useState } from 'react'

import { useCreateAuthToken } from '../../hooks/mutations/use-create-auth-token'
import { Session } from '../../utils/session-store'

type LoginFormProps = {
  onSession: (session: Session) => void
}

type LoginFormState = {
  email: string
  password: string
}

const LoginForm = (props: LoginFormProps) => {
  const { onSession } = props

  const createAuthToken = useCreateAuthToken()
  const [error, setError] = useState<Error | undefined>(undefined)
  const [loading, setLoading] = useState(false)

  const onFinish = useCallback(
    (state: LoginFormState) => {
      const { email, password } = state

      setError(undefined)

      createAuthToken({ email, password }).then(
        (session) => {
          setLoading(false)
          onSession(session)
        },
        (error) => {
          setError(error)
          setLoading(false)
        },
      )
    },
    [createAuthToken],
  )

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{}}
      onFinish={onFinish}
    >
      {error && <Alert message={error.message} type="error" />}
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email' }]}
      >
        <Input
          placeholder="Email"
          prefix={<UserOutlined disabled={loading} />}
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password' }]}
      >
        <Input.Password
          placeholder="Password"
          prefix={<LockOutlined />}
          disabled={loading}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export { LoginForm }
