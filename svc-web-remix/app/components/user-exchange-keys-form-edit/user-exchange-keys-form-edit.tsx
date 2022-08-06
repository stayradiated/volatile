import { useState } from 'react'
import { Link } from '@remix-run/react'

import { Alert, Form, Input, PrimaryButton } from '../retro-ui'
import { KeysInput } from '../user-exchange-keys-input'

import type { GetUserExchangeKeysFormEditQuery } from '~/graphql/generated'

type Props = {
  userExchangeKeysUID: string
  query: GetUserExchangeKeysFormEditQuery
}

const UserExchangeKeysFormEdit = (props: Props) => {
  const { userExchangeKeysUID, query } = props

  const validationResult = undefined
  const isValidating = false

  const [replaceKeys, setReplaceKeys] = useState(false)
  const [lastValidatedKeys, setLastValidatedKeys] = useState<
    Record<string, string> | undefined
  >(undefined)

  const keysAreValid =
    validationResult?.isValid &&
    JSON.stringify(state.keys) === JSON.stringify(lastValidatedKeys)

  const userExchangeKeys = query.user_exchange_keys_by_pk

  const handleReplaceKeys = () => {
    setReplaceKeys(true)
  }

  const handleFinish = async () => {
    await updateUserExchangeKeys({
      userExchangeKeysUID,
      description: state.description,
      keys: state.keys,
    })

    if (typeof onFinish === 'function') {
      onFinish()
    }
  }

  const handleValidate = async () => {
    if (!userExchangeKeys) {
      throw new Error('Invalid state')
    }

    setLastValidatedKeys(state.keys)

    await validateUserExchangeKeysLive({
      exchangeUID: userExchangeKeys.exchange.uid,
      keys: state.keys,
    })
  }

  return (
    <div>
      <h2>+ Edit Exchange API Key</h2>
      <Form
        name="addUserExchangeKey"
        method="post"
        action={`/settings/${userExchangeKeysUID}/edit`}
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

        {validationResult?.isValid === false && (
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
