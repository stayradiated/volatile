import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Select from 'react-select'
import { Spin, Alert, DatePicker } from 'antd'
import { Moment } from 'moment'

import { Form, Button, Input } from '../retro-ui'

import { SelectAsset } from '../select/asset/index'
import { SelectCurrency } from '../select/currency/index'

import {
  GetDcaOrderFormCreateQuery,
  GetDcaOrderFormCreateQueryVariables,
} from '../../utils/graphql'

import { useCreateDCAOrder } from './mutation-create'

const QUERY_DCA_ORDER_FORM = gql`
  query getDCAOrderFormCreate {
    kc_market {
      uid
      name
    }
    kc_user_exchange_keys {
      uid
      description
    }
    kc_exchange {
      uid
      name
      primary_currencies {
        symbol
        currency {
          name
        }
      }
      secondary_currencies {
        symbol
        currency {
          name
        }
      }
    }
  }
`
type UserExchangeKeysOption =
  GetDcaOrderFormCreateQuery['kc_user_exchange_keys'][0]

type MarketOption = GetDcaOrderFormCreateQuery['kc_market'][0]

type PrimaryCurrency =
  GetDcaOrderFormCreateQuery['kc_exchange'][0]['primary_currencies'][0]
type SecondaryCurrency =
  GetDcaOrderFormCreateQuery['kc_exchange'][0]['secondary_currencies'][0]

type FormState = {
  userExchangeKeys: null | UserExchangeKeysOption
  market: null | MarketOption
  primaryCurrency: null | PrimaryCurrency
  secondaryCurrency: null | SecondaryCurrency
  startAt: null | Moment
  marketOffset: null | string
  dailyAverage: null | string
}

const DCAOrderFormCreate = () => {
  const createDCAOrder = useCreateDCAOrder()

  const { data, loading, error } = useQuery<
    GetDcaOrderFormCreateQuery,
    GetDcaOrderFormCreateQueryVariables
  >(QUERY_DCA_ORDER_FORM)

  const [state, setState] = useState<FormState>({
    userExchangeKeys: null,
    market: null,
    primaryCurrency: null,
    secondaryCurrency: null,
    startAt: null,
    marketOffset: null,
    dailyAverage: null,
  })

  console.log(state)

  const handleFinish = async () => {
    if (!state.userExchangeKeys?.uid) {
      throw new Error('No User Exchange Keys')
    }

    if (!state.market?.uid) {
      throw new Error('No Market')
    }

    if (!state.primaryCurrency?.symbol) {
      throw new Error('No Primary Currency')
    }

    if (!state.secondaryCurrency?.symbol) {
      throw new Error('No Secondary Currency')
    }

    if (!state.startAt) {
      throw new Error('No Start At')
    }

    if (typeof state.marketOffset !== 'string') {
      throw new TypeError('No Market Offset')
    }

    if (typeof state.dailyAverage !== 'string') {
      throw new TypeError('No Daily Average')
    }

    await createDCAOrder({
      userExchangeKeysUID: state.userExchangeKeys.uid,
      marketUID: state.market.uid,
      primaryCurrency: state.primaryCurrency.symbol,
      secondaryCurrency: state.secondaryCurrency.symbol,
      startAt: state.startAt.toISOString(),
      marketOffset: Number.parseFloat(state.marketOffset),
      dailyAverage: Number.parseFloat(state.dailyAverage),
    })
  }

  if (loading) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  const marketOptions = data?.kc_market ?? []
  const userExchangeKeysOptions = data?.kc_user_exchange_keys ?? []

  return (
    <div>
      <h2>+ Add DCA Order</h2>
      <Form
        name="dcaOrderFormCreate"
        state={state}
        onChange={setState}
        onFinish={handleFinish}
      >
        <Form.Item name="userExchangeKeys" label="Exchange Keys">
          <Select<UserExchangeKeysOption>
            options={userExchangeKeysOptions}
            getOptionLabel={(option) => option.description}
            getOptionValue={(option) => option.uid}
          />
        </Form.Item>
        <Form.Item name="primaryCurrency" label="Asset">
          <SelectAsset />
        </Form.Item>
        <Form.Item name="secondaryCurrency" label="Currency">
          <SelectCurrency />
        </Form.Item>
        <Form.Item
          name="market"
          label={`Market Source (${state.primaryCurrency?.symbol}-${state.secondaryCurrency?.symbol})`}
        >
          <Select<MarketOption>
            options={marketOptions}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.uid}
          />
        </Form.Item>
        <Form.Item name="startAt" label="Start At">
          <DatePicker />
        </Form.Item>
        <Form.Item name="marketOffset" label="Market Offset">
          <Input required type="number" step="0.01" />
        </Form.Item>
        <Form.Item name="dailyAverage" label="Daily Average">
          <Input required type="number" step="0.01" />
        </Form.Item>
        <Form.Item name="minValue" label="Min Value">
          <Input type="number" placeholder="0.00" step="0.01" min="0" />
        </Form.Item>
        <Form.Item name="maxValue" label="Max Value">
          <Input type="number" placeholder="∞" step="0.01" min="0" />
        </Form.Item>
        <Button htmlType="submit">Create DCA Order</Button>
      </Form>
    </div>
  )
}

export { DCAOrderFormCreate }
