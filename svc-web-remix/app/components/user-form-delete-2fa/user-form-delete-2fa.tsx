import { Alert, PrimaryButton, Form, Input } from '../retro-ui'

type Props = {
  error?: string
}

const UserFormDelete2FA = (props: Props) => {
  const { error } = props

  return (
    <div>
      <h3>Remove 2FA</h3>

      {error && <Alert type="error" message={error} />}

      <Form name="UserForm2FA" method="post" action="/account/2fa/delete">
        <Form.Item name="token" label="Token">
          <Input />
        </Form.Item>
        <Form.Item>
          <PrimaryButton>Delete 2FA</PrimaryButton>
        </Form.Item>
      </Form>
    </div>
  )
}

export { UserFormDelete2FA }
