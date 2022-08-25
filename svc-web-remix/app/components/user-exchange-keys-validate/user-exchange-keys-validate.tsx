import { Form, Alert, PrimaryButton } from '~/components/retro-ui'

type Props = {
  userExchangeKeysUid: string
  error: string | undefined
  isValid: boolean | undefined
  validationMessage: string | undefined
}

const UserExchangeKeysValidate = (props: Props) => {
  const { userExchangeKeysUid, error, isValid, validationMessage } = props

  return (
    <Form
      name="UserExchangeKeysValidate"
      action={`/settings/${userExchangeKeysUid}/validate`}
      method="post"
    >
      <Form.Item>
        <h2>+ Validation {userExchangeKeysUid}</h2>
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
