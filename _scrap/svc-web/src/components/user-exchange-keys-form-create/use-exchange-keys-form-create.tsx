import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Select from 'react-select'

import { useValidateUserExchangeKeysLive } from '../../hooks/mutations/use-validate-user-exchange-keys-live'

import { Alert, Spin, Form, Input, Button } from '../retro-ui'
import { KeysInput } from '../user-exchange-keys-input'

import type {
  GetExchangeKeysFormCreateQuery,
  GetExchangeKeysFormCreateQueryVariables,
} from '../../utils/graphql'
import { useCreateUserExchangeKeys } from './mutation'

type Exchange = GetExchangeKeysFormCreateQuery['kc_exchange'][0]

const QUERY_EXCHANGE_KEYS_FORM = gql`
  query getExchangeKeysFormCreate {
    kc_exchange {
      uid
      id
      name
    }
  }
`

type State = {
  exchange: Exchange | undefined
  description: string
  keys: Record<string, string>
}

const INITIAL_STATE: State = {
  exchange: undefined,
  description: '',
  keys: {},
}

type Props = {
  onCancel?: () => void
  onFinish?: () => void
}

const UserExchangeKeysFormCreate = (props: Props) => {
  const { onFinish, onCancel } = props

  const { data, loading, error } = useQuery<
    GetExchangeKeysFormCreateQuery,
    GetExchangeKeysFormCreateQueryVariables
  >(QUERY_EXCHANGE_KEYS_FORM)

  const createUserExchangeKeys = useCreateUserExchangeKeys()
  const {
    validateUserExchangeKeysLive,
    loading: isValidating,
    result: validationResult,
    reset: resetValidateState,
  } = useValidateUserExchangeKeysLive()

  const [state, setState] = useState<State>(INITIAL_STATE)
  const [lastValidatedKeys, setLastValidatedKeys] = useState<
    Record<string, string> | undefined
  >(undefined)

  const keysAreValid =
    validationResult?.isValid &&
    JSON.stringify(state.keys) === JSON.stringify(lastValidatedKeys)

  if (loading) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  const handleFinish = async () => {
    if (!state.exchange) {
      throw new Error('Exchange is a required field!')
    }

    await createUserExchangeKeys({
      exchangeUID: state.exchange.uid,
      description: state.description,
      keys: state.keys,
    })

    setState(INITIAL_STATE)
    resetValidateState()

    if (typeof onFinish === 'function') {
      onFinish()
    }
  }

  const handleValidate = async () => {
    if (!state.exchange) {
      throw new Error('Exchange is a required field!')
    }

    setLastValidatedKeys(state.keys)

    await validateUserExchangeKeysLive({
      exchangeUID: state.exchange.uid,
      keys: state.keys,
    })
  }

  const options = data?.kc_exchange ?? []

  return (
    <div>
      <h2>+ Exchange API Key</h2>
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
          <Select<Exchange>
            placeholder="Exchange"
            options={options}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.uid}
          />
        </Form.Item>

        <Form.Item name="keys">
          <KeysInput exchangeID={state.exchange?.id} />
        </Form.Item>

        {validationResult?.isValid === false && (
          <Alert message={validationResult.validationMessage} type="error" />
        )}

        <Form.Item>
          <Button htmlType="button" type="link" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            htmlType="button"
            type="primary"
            onClick={handleValidate}
            loading={isValidating}
            disabled={keysAreValid}
          >
            {keysAreValid ? '✓ Valid' : 'Validate Keys'}
          </Button>

          <Button htmlType="submit" disabled={!validationResult?.isValid}>
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export { UserExchangeKeysFormCreate }
