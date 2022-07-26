import Select from 'react-select'
import { useState } from 'react'

import { Form, Input, PrimaryButton, LinkButton } from '../retro-ui'
import { KeysInput } from '../user-exchange-keys-input'

import type { GetExchangeKeysFormCreateQuery } from '~/graphql/generated'

type Exchange = GetExchangeKeysFormCreateQuery['kc_exchange'][0]

type Props = {
  query: GetExchangeKeysFormCreateQuery
}

const UserExchangeKeysFormCreate = (props: Props) => {
  const { query } = props

  const [exchange, setExchange] = useState<Exchange | undefined>(undefined)

  const keysAreValid = false

  const options = query.kc_exchange ?? []

  return (
    <div>
      <h2>+ Exchange API Key</h2>
      <Form name="addUserExchangeKey" method="post" action="/settings/create">
        <Form.Item label="Name" name="description">
          <Input />
        </Form.Item>

        <Form.Item label="Exchange" name="exchange">
          <Select<Exchange>
            placeholder="Exchange"
            options={options}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.uid}
            onChange={setExchange}
          />
        </Form.Item>

        <Form.Item name="keys">
          <KeysInput exchangeID={exchange?.id} />
        </Form.Item>

        <Form.Item>
          <LinkButton href="/settings">Cancel</LinkButton>
          <PrimaryButton type="button">
            {keysAreValid ? '✓ Valid' : 'Validate Keys'}
          </PrimaryButton>

          <PrimaryButton type="submit">Add</PrimaryButton>
        </Form.Item>
      </Form>
    </div>
  )
}

export { UserExchangeKeysFormCreate }
