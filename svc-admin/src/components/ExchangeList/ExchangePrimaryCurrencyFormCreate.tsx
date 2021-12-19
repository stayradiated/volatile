import { Form, Input, Button } from 'antd'
import { gql, useMutation } from '@apollo/client'
import { formatISO } from 'date-fns'

import type {
  CreateExchangePrimaryCurrencyMutation as Mutation,
  CreateExchangePrimaryCurrencyMutationVariables as MutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation createExchangePrimaryCurrency(
    $exchangeUID: uuid!
    $symbol: String!
    $createdAt: timestamptz!
    $updatedAt: timestamptz!
  ) {
    insert_kc_exchange_primary_currency_one(
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

const ExchangePrimaryCurrencyFormCreate = () => {
  const [mutation] = useMutation<Mutation, MutationVariables>(MUTATION)

  const handleFinish = async (state: FormState) => {
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
    <Form<FormState> name="ExchangePrimaryCurrency" onFinish={handleFinish}>
      <h2>Primary Currency</h2>
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

export { ExchangePrimaryCurrencyFormCreate }
