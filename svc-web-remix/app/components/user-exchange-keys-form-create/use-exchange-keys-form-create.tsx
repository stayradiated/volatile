import { Link } from '@remix-run/react'
import Select from 'react-select'
import { useState } from 'react'

import { Form, Input, PrimaryButton } from '../retro-ui'
import { KeysInput } from '../user-exchange-keys-input'

import type { GetExchangeKeysFormCreateQuery } from '~/graphql/generated'

type Exchange = GetExchangeKeysFormCreateQuery['exchange'][number]

type Props = {
  query: GetExchangeKeysFormCreateQuery
}

const UserExchangeKeysFormCreate = (props: Props) => {
  const { query } = props

  const [exchange, setExchange] = useState<Exchange | undefined>(undefined)

  const keysAreValid = false

  const options = query.exchange ?? []

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
            onChange={(value) => {
              setExchange(value ?? undefined)
            }}
          />
        </Form.Item>

        <Form.Item name="keys">
          <KeysInput exchangeID={exchange?.id} />
        </Form.Item>

        <Form.Item>
          <Link to="/settings">Cancel</Link>
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
