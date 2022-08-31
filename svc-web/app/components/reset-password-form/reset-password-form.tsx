import styled from 'styled-components'

import { Logo } from '../logo'
import { Alert, Spin, Card, Form, Input, PrimaryButton } from '../retro-ui'

const FormActions = styled(Form.Item)`
  display: flex;
  justify-content: space-between;
`

type Props = {
  state: 'idle' | 'submitting' | 'loading' | 'success'
  email: string
  error?: string
}

const ResetPasswordForm = (props: Props) => {
  const { state, email, error } = props

  if (state === 'success') {
    return (
      <Card>
        <Logo />
        <Spin />
      </Card>
    )
  }

  return (
    <Card>
      <Logo />
      <Form name="reset-password" method="post">
        <Form.Item>
          <p>
            Reset the account password for <strong>{email}</strong>.
          </p>
        </Form.Item>
        {error && <Alert message={error} type="error" />}
        <Form.Item label="Password" name="password">
          <Input type="password" tabIndex={0} />
        </Form.Item>
        <FormActions>
          <PrimaryButton type="submit" disabled={state !== 'idle'}>
            Save Password
          </PrimaryButton>
        </FormActions>
      </Form>
    </Card>
  )
}

export { ResetPasswordForm }
