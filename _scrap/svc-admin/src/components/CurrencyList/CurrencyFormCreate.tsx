import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { formatISO } from 'date-fns'

import type {
  CreateCurrencyMutation,
  CreateCurrencyMutationVariables,
} from '../../utils/graphql'

import { Form, Input, Button } from '../retro-ui'

const MUTATION = gql`
  mutation createCurrency(
    $name: String!
    $symbol: String!
    $createdAt: timestamptz!
    $updatedAt: timestamptz!
  ) {
    insert_kc_currency_one(
      object: {
        name: $name
        symbol: $symbol
        created_at: $createdAt
        updated_at: $updatedAt
      }
    ) {
      symbol
      name
    }
  }
`

type FormState = {
  symbol: string
  name: string
}

const CurrencyFormCreate = () => {
  const [mutation] = useMutation<
    CreateCurrencyMutation,
    CreateCurrencyMutationVariables
  >(MUTATION)

  const [state, setState] = useState<FormState>({
    symbol: '',
    name: '',
  })

  const handleFinish = async () => {
    await mutation({
      variables: {
        name: state.name,
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
      name="CurrencyFormCreate"
      onFinish={handleFinish}
    >
      <Form.Item name="symbol" label="Symbol">
        <Input />
      </Form.Item>
      <Form.Item name="name" label="Name">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Create</Button>
      </Form.Item>
    </Form>
  )
}

export { CurrencyFormCreate }
