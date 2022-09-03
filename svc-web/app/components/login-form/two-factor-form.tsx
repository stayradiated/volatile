import { Link } from '@remix-run/react'
import styled from 'styled-components'

import { Alert, Form, CheckboxInput, Input, PrimaryButton } from '../retro-ui'

const FormActions = styled(Form.Item)`
  display: flex;
  justify-content: space-between;
`

type TwoFactorFormProps = {
  username: string
  password: string
  returnTo: string | undefined
  error: string | undefined
}

const TwoFactorForm = (props: TwoFactorFormProps) => {
  const { username, password, returnTo, error } = props

  return (
    <Form name="login" method="post" action="/login">
      <Form.Item>
        <p>Log in to your account</p>
        <input type="hidden" name="return" value={returnTo} />
        <input type="hidden" name="username" value={username} />
        <input type="hidden" name="password" value={password} />
      </Form.Item>
      {error && <Alert message={error} type="error" />}
      <Form.Item label="2FA Token" name="token2FA">
        <Input inputMode="numeric" minLength={6} maxLength={6} />
      </Form.Item>
      <Form.Item label="Trust This Device" name="deviceTrusted">
        <CheckboxInput />
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

export { TwoFactorForm }
