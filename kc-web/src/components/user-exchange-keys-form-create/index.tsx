import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Select from 'react-select'
import { Alert } from 'antd'

import { Form, Input, Button } from '../retro-ui'

import { useValidateUserExchangeKeysLive } from '../../hooks/mutations/use-validate-user-exchange-keys-live'

import type {
  GetExchangeKeysFormCreateQuery,
  GetExchangeKeysFormCreateQueryVariables,
} from '../../utils/graphql'
import { useCreateUserExchangeKeys } from './mutation'
import { KeyInput } from './keys'

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
  onCancel?: () => void,
  onFinish?: () => void,
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

  if (loading) {
    return <p>loading exchange list...</p>
  }

  if (error) {
    return <p>{error.message}</p>
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

  const handleValidate = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (!state.exchange) {
      throw new Error('Exchange is a required field!')
    }

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
          <KeyInput exchangeID={state.exchange?.id} />
        </Form.Item>

        {validationResult?.isValid === false && (
          <Alert message={validationResult.validationMessage} type="error" />
        )}

        <Form.Item>
          <Button
            type="link"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={handleValidate}
            loading={isValidating}
            disabled={validationResult?.isValid === true}
          >
            {validationResult?.isValid === true ? '✓ Valid' : 'Validate Keys'}
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
