import { Link } from '@remix-run/react'

import { Alert, Form, Input, PrimaryButton } from '../retro-ui'
import { KeysInput } from '../user-exchange-keys-input'

import type { GetUserExchangeKeysFormEditQuery } from '~/graphql/generated'

/* ACTION
  const handleValidate = async () => {
    if (!userExchangeKeys) {
      throw new Error('Invalid state')
    }

    setLastValidatedKeys(state.keys)

    await validateUserExchangeKeysLive({
      exchangeUid: userExchangeKeys.exchange.uid,
      keys: state.keys,
    })
  }

await updateUserExchangeKeys({
      userExchangeKeysUid,
      description: state.description,
      keys: state.keys,
    })
*/

type Props = {
  userExchangeKeysUid: string
  query: GetUserExchangeKeysFormEditQuery
}

const UserExchangeKeysFormEdit = (props: Props) => {
  const { userExchangeKeysUid, query } = props
  const userExchangeKeys = query.userExchangeKeysByPk

  const replaceKeys = false
  const handleValidate = () => {
    return undefined
  }

  const handleReplaceKeys = () => {
    return undefined
  }

  const isValidating = false
  const keysAreValid = false
  const validationResult = { isValid: false, validationMessage: '...' }

  return (
    <div>
      <h2>+ Edit Exchange API Key</h2>
      <Form
        name="addUserExchangeKey"
        method="post"
        action={`/settings/${userExchangeKeysUid}/edit`}
      >
        <Form.Item label="Name" name="description">
          <Input defaultValue={userExchangeKeys?.description} />
        </Form.Item>

        <Form.Item label="Exchange" name="exchange">
          <p>{userExchangeKeys?.exchange.name}</p>
        </Form.Item>

        <Form.Item name="keys">
          {replaceKeys ? (
            <KeysInput exchangeID={userExchangeKeys?.exchange.id} />
          ) : (
            <PrimaryButton type="button" onClick={handleReplaceKeys}>
              Replace API Keys
            </PrimaryButton>
          )}
        </Form.Item>

        {!validationResult?.isValid && (
          <Alert message={validationResult.validationMessage} type="error" />
        )}

        <Form.Item>
          <Link to="/settings">Cancel</Link>

          {replaceKeys && (
            <PrimaryButton
              type="button"
              onClick={handleValidate}
              disabled={isValidating || keysAreValid}
            >
              {keysAreValid ? '✓ Valid' : 'Validate Keys'}
            </PrimaryButton>
          )}

          <PrimaryButton type="submit">Save</PrimaryButton>
        </Form.Item>
      </Form>
    </div>
  )
}

export { UserExchangeKeysFormEdit }
