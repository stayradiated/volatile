import { Form, Alert, PrimaryButton } from '~/components/retro-ui'

type Props = {
  userExchangeKeysUID: string
  error: string | undefined
  isValid: boolean | undefined
  validationMessage: string | undefined
}

const UserExchangeKeysValidate = (props: Props) => {
  const { userExchangeKeysUID, error, isValid, validationMessage } = props

  return (
    <Form
      name="UserExchangeKeysValidate"
      action={`/settings/${userExchangeKeysUID}/validate`}
      method="post"
    >
      <Form.Item>
        <h2>+ Validation {userExchangeKeysUID}</h2>
        {error && <Alert type="error" message={error} />}
        <p>IS VALID: {String(isValid)}</p>
        {validationMessage && (
          <Alert type="error" message={validationMessage} />
        )}
      </Form.Item>
      <Form.Item>
        <PrimaryButton type="submit">Validate</PrimaryButton>
      </Form.Item>
    </Form>
  )
}

export { UserExchangeKeysValidate }
