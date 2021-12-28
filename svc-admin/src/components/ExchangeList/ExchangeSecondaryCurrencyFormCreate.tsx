import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { formatISO } from 'date-fns'

import { Form, Input, Button } from '../retro-ui'

import type {
  CreateExchangeSecondaryCurrencyMutation as Mutation,
  CreateExchangeSecondaryCurrencyMutationVariables as MutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation createExchangeSecondaryCurrency(
    $exchangeUID: uuid!
    $symbol: String!
    $createdAt: timestamptz!
    $updatedAt: timestamptz!
  ) {
    insert_kc_exchange_secondary_currency_one(
      object: {
        exchange_uid: $exchangeUID
        symbol: $symbol
        created_at: $createdAt
        updated_at: $updatedAt
      }
    ) {
      exchange_uid
      symbol
    }
  }
`

type FormState = {
  exchangeUID: string
  symbol: string
}

const ExchangeSecondaryCurrencyFormCreate = () => {
  const [mutation] = useMutation<Mutation, MutationVariables>(MUTATION)

  const [state, setState] = useState<FormState>({
    exchangeUID: '',
    symbol: '',
  })

  const handleFinish = async () => {
    await mutation({
      variables: {
        exchangeUID: state.exchangeUID,
        symbol: state.symbol,
        createdAt: formatISO(new Date()),
        updatedAt: formatISO(new Date()),
      },
    })
  }

  return (
    <Form
      state={state}
      onChange={setState}
      name="ExchangeSecondaryCurrency"
      onFinish={handleFinish}
    >
      <h2>Secondary Currency</h2>
      <Form.Item name="exchangeUID" label="Exchange UID">
        <Input />
      </Form.Item>
      <Form.Item name="symbol" label="Symbol">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Create</Button>
      </Form.Item>
    </Form>
  )
}

export { ExchangeSecondaryCurrencyFormCreate }
