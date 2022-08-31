import { Link } from '@remix-run/react'
import styled from 'styled-components'

import { Logo } from '../logo'
import { Alert, Card, Form, Input, PrimaryButton } from '../retro-ui'

const FormActions = styled(Form.Item)`
  display: flex;
  justify-content: space-between;
`

type Props = {
  state: 'idle' | 'submitting' | 'loading' | 'success'
  email?: string
  error?: string
}

const SendUserPasswordResetForm = (props: Props) => {
  const { state, error, email } = props

  if (state === 'success') {
    return (
      <Card>
        <Logo />
        <p>
          An email has been sent to <strong>{email}</strong>.
        </p>
      </Card>
    )
  }

  return (
    <Card>
      <Logo />
      <Form name="send-user-password-reset-password" method="post">
        <Form.Item>
          <p>Reset your account password.</p>
        </Form.Item>
        {error && <Alert message={error} type="error" />}
        <Form.Item label="Email" name="email">
          <Input type="email" tabIndex={0} />
        </Form.Item>
        <FormActions>
          <div>
            <Link to="/login/">log in</Link> or
            <Link to="/register/">sign up</Link>{' '}
          </div>

          <PrimaryButton type="submit" disabled={state === 'submitting'}>
            Send Reset Link
          </PrimaryButton>
        </FormActions>
      </Form>
    </Card>
  )
}

export { SendUserPasswordResetForm }
