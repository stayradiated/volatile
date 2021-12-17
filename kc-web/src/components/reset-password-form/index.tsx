import { useState, useEffect } from 'react'

import { useValidateUserPasswordReset } from '../../hooks/mutations/use-validate-user-password-reset'
import { useResetUserPassword } from '../../hooks/mutations/use-reset-user-password'

import { Logo } from '../logo'
import { Alert, Spin, Card, Form, Input, Button } from '../retro-ui'

import type { Session } from '../../utils/session-store'
import styles from './index.module.css'

type Props = {
  passwordResetSecret: string
  onSession: (session: Session) => void
}

type FormState = {
  password: string
}

const ResetPasswordForm = (props: Props) => {
  const { passwordResetSecret, onSession } = props

  const validateUserPasswordReset = useValidateUserPasswordReset()
  const sendUserPasswordReset = useResetUserPassword()

  const [error, setError] = useState<Error | undefined>(undefined)
  const [submitting, setSubmitting] = useState(false)

  const [state, setState] = useState<FormState>({
    password: '',
  })

  const [loading, setLoading] = useState<boolean>(true)
  const [isValid, setIsValid] = useState<boolean>(false)
  const [email, setEmail] = useState<string | null | undefined>(null)

  useEffect(() => {
    validateUserPasswordReset({
      passwordResetSecret,
    }).then(({ isValid, email }) => {
      setIsValid(isValid)
      setEmail(email)
      setLoading(false)
    })
  }, [])

  const handleFormFinish = async () => {
    const { password } = state

    if (!email) {
      setError(new Error('Email is missing.'))
      return
    }

    setError(undefined)
    setSubmitting(true)

    try {
      const session = await sendUserPasswordReset({
        email,
        passwordResetSecret,
        newPassword: password,
      })
      onSession(session)
    } catch (error) {
      if (error instanceof Error) {
        setError(error)
      }
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <Card>
        <Logo />
        <Spin />
      </Card>
    )
  }

  if (!isValid) {
    return (
      <Card>
        <Logo />
        <Alert
          message="Sorry, this URL is either expired or invalid."
          type="error"
        />
      </Card>
    )
  }

  return (
    <Card>
      <Logo />
      <Form
        name="reset-password"
        state={state}
        onChange={setState}
        onFinish={handleFormFinish}
      >
        <Form.Item>
          <p>
            Reset the account password for <strong>{email}</strong>.
          </p>
        </Form.Item>
        {error && <Alert message={error.message} type="error" />}
        <Form.Item label="Password" name="password">
          <Input type="password" tabIndex={0} />
        </Form.Item>
        <Form.Item className={styles.actions}>
          <Button type="primary" htmlType="submit" loading={submitting}>
            Save Password
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export { ResetPasswordForm }
