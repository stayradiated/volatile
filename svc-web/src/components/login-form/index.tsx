import { useState } from 'react'

import { useCreateAuthToken } from '../../hooks/mutations/use-create-auth-token'
import { Session } from '../../utils/session-store'

import { Logo } from '../logo'
import { Alert, Card, Form, CheckboxInput, Input, Button } from '../retro-ui'

import styles from './index.module.css'

type LoginFormProps = {
  onSession: (session: Session) => void
}

type LoginFormState = {
  email: string
  password: string
  token2FA: string
  deviceTrusted: boolean
}

const LoginForm = (props: LoginFormProps) => {
  const { onSession } = props

  const createAuthToken = useCreateAuthToken()
  const [error, setError] = useState<Error | undefined>(undefined)
  const [loading, setLoading] = useState(false)

  const [state, setState] = useState<LoginFormState>({
    email: '',
    password: '',
    token2FA: '',
    deviceTrusted: false,
  })

  const handleFormFinish = () => {
    const { email, password, token2FA, deviceTrusted } = state

    setError(undefined)

    createAuthToken({
      email,
      password,
      token2FA: token2FA.trim().length > 0 ? token2FA : undefined,
      deviceTrusted,
    }).then(
      (session) => {
        setLoading(false)
        onSession(session)
      },
      (error) => {
        setError(error)
        setLoading(false)
      },
    )
  }

  return (
    <Card>
      <Logo />
      <Form
        name="login"
        state={state}
        onChange={setState}
        onFinish={handleFormFinish}
      >
        <Form.Item>
          <p>Log in to your account</p>
        </Form.Item>
        {error && <Alert message={error.message} type="error" />}
        <Form.Item label="Email" name="email">
          <Input type="email" tabIndex={0} />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" disabled={loading} />
        </Form.Item>
        <Form.Item label="2FA Token" name="token2FA">
          <Input disabled={loading} />
        </Form.Item>
        <Form.Item label="Don't Ask Me For 2FA Again" name="deviceTrusted">
          <CheckboxInput disabled={loading} />
        </Form.Item>
        <Form.Item className={styles.actions}>
          <div>
            <Button type="link" href="/register/">
              sign up
            </Button>{' '}
            or{' '}
            <Button type="link" href="/reset-password/">
              reset password
            </Button>
          </div>

          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            tabIndex={3}
          >
            Log In
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export { LoginForm }
