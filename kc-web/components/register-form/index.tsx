import { useCallback, useRef, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { Form, Input, Button, Alert } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import type { Session } from '../../utils/session-store'
import { useCreateAuthToken } from '../../hooks/mutations/use-create-auth-token'

const MUTATION_CREATE_USER = gql`
  mutation create_user($email: String!, $password: String!) {
    create_user(email: $email, password: $password) {
      user_uid
    }
  }
`

type RegisterFormProps = {
  onSession: (session: Session) => void
}

type RegisterFormState = {
  email: string
  password: string
}

const RegisterForm = (props: RegisterFormProps) => {
  const { onSession } = props

  const [createUser] = useMutation(MUTATION_CREATE_USER)
  const createAuthToken = useCreateAuthToken()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | undefined>(undefined)

  const onFinish = useCallback(
    (state: RegisterFormState) => {
      const { email, password } = state

      setLoading(true)
      setError(undefined)

      createUser({ variables: { email, password } })
        .then(async () => createAuthToken({ email, password }))
        .then(
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
    [createUser, createAuthToken],
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

export { RegisterForm }
