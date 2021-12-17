import { useState } from 'react'

import { useSendUserPasswordReset } from '../../hooks/mutations/use-send-user-password-reset'

import { Logo } from '../logo'
import { Alert, Card, Form, Input, Button } from '../retro-ui'

import styles from './index.module.css'

type FormState = {
  email: string
}

const SendUserPasswordResetForm = () => {
  const sendUserPasswordReset = useSendUserPasswordReset()
  const [error, setError] = useState<Error | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const [state, setState] = useState<FormState>({
    email: '',
  })

  const handleFormFinish = async () => {
    const { email } = state

    setError(undefined)
    setLoading(true)

    try {
      await sendUserPasswordReset({ email })
      setSuccess(true)
    } catch (error) {
      if (error instanceof Error) {
        setError(error)
      }
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <Card>
        <Logo />
        <p>
          An email has been sent to <strong>{state.email}</strong>.
        </p>
      </Card>
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
          <p>Reset your account password.</p>
        </Form.Item>
        {error && <Alert message={error.message} type="error" />}
        <Form.Item label="Email" name="email">
          <Input type="email" tabIndex={0} />
        </Form.Item>
        <Form.Item className={styles.actions}>
          <div>
            <Button type="link" href="/login/">
              log in
            </Button>{' '}
            or
            <Button type="link" href="/register/">
              sign up
            </Button>{' '}
          </div>

          <Button type="primary" htmlType="submit" loading={loading}>
            Send Reset Link
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export { SendUserPasswordResetForm }
