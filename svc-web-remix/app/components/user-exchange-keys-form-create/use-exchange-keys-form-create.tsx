import { useState } from 'react'
import Select from 'react-select'

import { Alert, Form, Input, Button, LinkButton } from '../retro-ui'
import { KeysInput } from '../user-exchange-keys-input'

import type { GetExchangeKeysFormCreateQuery } from '~/graphql/generated'

type Exchange = GetExchangeKeysFormCreateQuery['kc_exchange'][0]

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
  query: GetExchangeKeysFormCreateQuery
}

const UserExchangeKeysFormCreate = (props: Props) => {
  const { query } = props

  const validationResult = undefined
  const isValidating = false

  const [state, setState] = useState<State>(INITIAL_STATE)
  const [lastValidatedKeys, setLastValidatedKeys] = useState<
    Record<string, string> | undefined
  >(undefined)

  const keysAreValid =
    query?.isValid &&
    JSON.stringify(state.keys) === JSON.stringify(lastValidatedKeys)

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

  const options = query.kc_exchange ?? []

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
          <LinkButton href="/settings">Cancel</LinkButton>
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
