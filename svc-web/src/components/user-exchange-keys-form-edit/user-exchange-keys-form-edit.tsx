import { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'

import { useValidateUserExchangeKeysLive } from '../../hooks/mutations/use-validate-user-exchange-keys-live'

import { Spin, Alert, Form, Input, Button } from '../retro-ui'
import { KeysInput } from '../user-exchange-keys-input'

import type {
  GetUserExchangeKeysFormEditQuery,
  GetUserExchangeKeysFormEditQueryVariables,
} from '../../utils/graphql'
import { useUpdateUserExchangeKeys } from './mutation'

const QUERY = gql`
  query getUserExchangeKeysFormEdit($userExchangeKeysUID: uuid!) {
    kc_user_exchange_keys_by_pk(uid: $userExchangeKeysUID) {
      uid
      description
      exchange {
        uid
        id
        name
      }
    }
  }
`

type State = {
  description: string
  keys: Record<string, string> | undefined
}

const INITIAL_STATE: State = {
  description: '',
  keys: undefined,
}

type Props = {
  userExchangeKeysUID: string
  onFinish?: () => void
  onCancel?: () => void
}

const UserExchangeKeysFormEdit = (props: Props) => {
  const { userExchangeKeysUID, onFinish, onCancel } = props

  const { data, loading, error } = useQuery<
    GetUserExchangeKeysFormEditQuery,
    GetUserExchangeKeysFormEditQueryVariables
  >(QUERY, {
    variables: {
      userExchangeKeysUID,
    },
  })

  const updateUserExchangeKeys = useUpdateUserExchangeKeys()
  const {
    validateUserExchangeKeysLive,
    loading: isValidating,
    result: validationResult,
  } = useValidateUserExchangeKeysLive()

  const [replaceKeys, setReplaceKeys] = useState(false)
  const [state, setState] = useState<State>(INITIAL_STATE)
  const [lastValidatedKeys, setLastValidatedKeys] = useState<
    Record<string, string> | undefined
  >(undefined)

  const keysAreValid =
    validationResult?.isValid &&
    JSON.stringify(state.keys) === JSON.stringify(lastValidatedKeys)

  const userExchangeKeys = data?.kc_user_exchange_keys_by_pk

  useEffect(() => {
    if (userExchangeKeys) {
      setState({
        description: userExchangeKeys.description,
        keys: state.keys,
      })
    }
  }, [userExchangeKeys])

  if (loading) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

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
        state={state}
        onChange={setState}
        onFinish={handleFinish}
      >
        <Form.Item label="Name" name="description">
          <Input />
        </Form.Item>

        <Form.Item label="Exchange" name="exchange">
          <p>{userExchangeKeys?.exchange.name}</p>
        </Form.Item>

        <Form.Item name="keys">
          {replaceKeys ? (
            <KeysInput exchangeID={userExchangeKeys?.exchange.id} />
          ) : (
            <Button htmlType="button" onClick={handleReplaceKeys}>
              Replace API Keys
            </Button>
          )}
        </Form.Item>

        {validationResult?.isValid === false && (
          <Alert message={validationResult.validationMessage} type="error" />
        )}

        <Form.Item>
          <Button htmlType="button" type="link" onClick={onCancel}>
            Cancel
          </Button>

          {replaceKeys && (
            <Button
              type="primary"
              htmlType="button"
              onClick={handleValidate}
              loading={isValidating}
              disabled={keysAreValid}
            >
              {keysAreValid ? '✓ Valid' : 'Validate Keys'}
            </Button>
          )}

          <Button htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export { UserExchangeKeysFormEdit }
