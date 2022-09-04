import { Link } from '@remix-run/react'
import styled from 'styled-components'

import { Alert, Form, Input, PrimaryButton } from '../retro-ui'

const FormActions = styled(Form.Item)`
  display: flex;
  justify-content: space-between;
`

type LoginFormProps = {
  returnTo: string | undefined
  error: string | undefined
  deviceId: string
  deviceName: string
}

const LoginForm = (props: LoginFormProps) => {
  const { deviceId, deviceName, returnTo, error } = props

  return (
    <Form name="login" method="post">
      <Form.Item>
        <p>Log in to your account</p>
        <input type="hidden" name="return" value={returnTo} />
        <input type="hidden" name="deviceId" value={deviceId} />
        <input type="hidden" name="deviceName" value={deviceName} />
      </Form.Item>
      {error && <Alert message={error} type="error" />}
      <Form.Item label="Email" name="email">
        <Input type="email" />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input type="password" />
      </Form.Item>
      <FormActions>
        <div>
          <Link to="/register/">sign up</Link> or{' '}
          <Link to="/reset-password/">reset password</Link>
        </div>

        <PrimaryButton type="submit">Log In</PrimaryButton>
      </FormActions>
    </Form>
  )
}

export { LoginForm }
