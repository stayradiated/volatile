import { Link } from '@remix-run/react'
import styled from 'styled-components'

import { Alert, Form, CheckboxInput, Input, PrimaryButton } from '../retro-ui'

const FormActions = styled(Form.Item)`
  display: flex;
  justify-content: space-between;
`

type TwoFactorFormProps = {
  email: string
  password: string
  deviceId: string
  deviceName: string
  returnTo: string | undefined
  error: string | undefined
}

const TwoFactorForm = (props: TwoFactorFormProps) => {
  const { email, password, deviceId, deviceName, returnTo, error } = props

  return (
    <Form name="login" method="post">
      <Form.Item>
        <p>Log in to your account</p>
        <input type="hidden" name="return" value={returnTo} />
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="password" value={password} />
        <input type="hidden" name="deviceId" value={deviceId} />
        <input type="hidden" name="deviceName" value={deviceName} />
      </Form.Item>
      {error && <Alert message={error} type="error" />}
      <Form.Item label="2FA Token" name="token2fa">
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
