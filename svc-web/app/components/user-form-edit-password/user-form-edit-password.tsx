import { Alert, Form, Input, PrimaryButton } from '../retro-ui'

type Props = {
  success: true | undefined
  error: string | undefined
}

const UserFormEditPassword = (props: Props) => {
  const { success, error } = props

  return (
    <Form name="UserFormEditPassword" method="post" action="/account/password">
      <p>Password: ********</p>

      {error && <Alert type="error" message={error} />}
      {success && (
        <Alert type="info" message="Successfully changed password." />
      )}

      <Form.Item name="password" label="Password">
        <Input type="password" />
      </Form.Item>

      <Form.Item name="password2" label="Repeat Password">
        <Input type="password" />
      </Form.Item>

      <Form.Item>
        <PrimaryButton>Save</PrimaryButton>
      </Form.Item>
    </Form>
  )
}

export { UserFormEditPassword }
