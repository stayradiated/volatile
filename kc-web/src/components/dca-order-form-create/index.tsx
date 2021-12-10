import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Select from 'react-select'
import { DatePicker } from 'antd'
import { Moment } from 'moment'

import { Spin, Alert, Form, Button, Input } from '../retro-ui'

import { SelectAsset } from '../select/asset/index'
import { SelectCurrency } from '../select/currency/index'

import {
  GetDcaOrderFormCreateQuery as Query,
  GetDcaOrderFormCreateQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { useCreateDCAOrder } from './mutation-create'

const QUERY_DCA_ORDER_FORM = gql`
  query getDCAOrderFormCreate {
    kc_market {
      uid
      name
      market_prices(
        distinct_on: [asset_symbol, currency]
        where: { timestamp: { _gt: "2021-12-09T12:00:00" } }
      ) {
        asset_symbol
        currency
      }
    }
    kc_user_exchange_keys {
      uid
      description
      exchange_uid
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

type Exchange = Query['kc_exchange'][0]
type UserExchangeKeys = Query['kc_user_exchange_keys'][0]
type Market = Query['kc_market'][0]
type PrimaryCurrency = Query['kc_exchange'][0]['primary_currencies'][0]
type SecondaryCurrency = Query['kc_exchange'][0]['secondary_currencies'][0]

type FormState = {
  exchange: null | Exchange
  userExchangeKeys: null | UserExchangeKeys
  market: null | Market
  primaryCurrency: null | PrimaryCurrency
  secondaryCurrency: null | SecondaryCurrency
  startAt: null | Moment
  marketOffset: string
  dailyAverage: string
  minValue: string
  maxValue: string
}

type Props = {
  onCancel?: () => void
  onFinish?: () => void
}

const DCAOrderFormCreate = (props: Props) => {
  const { onCancel, onFinish } = props

  const createDCAOrder = useCreateDCAOrder()

  const { data, loading, error } = useQuery<Query, QueryVariables>(
    QUERY_DCA_ORDER_FORM,
  )

  const [state, setState] = useState<FormState>({
    exchange: null,
    userExchangeKeys: null,
    market: null,
    primaryCurrency: null,
    secondaryCurrency: null,
    startAt: null,
    marketOffset: '',
    dailyAverage: '',
    minValue: '',
    maxValue: '',
  })

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

    if (state.marketOffset.trim().length === 0) {
      throw new TypeError('No Market Offset')
    }

    if (state.dailyAverage.trim().length === 0) {
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
      minValue: Number.parseFloat(state.minValue),
      maxValue: Number.parseFloat(state.maxValue),
    })

    if (typeof onFinish === 'function') {
      onFinish()
    }
  }

  if (loading) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  const exchangeOptions = data?.kc_exchange ?? []
  const marketOptions = (data?.kc_market ?? []).filter((item) => {
    return item.market_prices.some((price) => {
      return (
        price.asset_symbol === state.primaryCurrency?.symbol &&
        price.currency === state.secondaryCurrency?.symbol
      )
    })
  })
  const userExchangeKeysOptions = (data?.kc_user_exchange_keys ?? []).filter(
    (item) => {
      return item.exchange_uid === state.exchange?.uid
    },
  )

  return (
    <div>
      <h2>+ Add DCA Order</h2>
      <Form
        name="dcaOrderFormCreate"
        state={state}
        onChange={setState}
        onFinish={handleFinish}
      >
        <Form.Item name="exchange" label="Exchange">
          <Select<Exchange>
            options={exchangeOptions}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.uid}
          />
        </Form.Item>
        <Form.Item name="userExchangeKeys" label="Exchange Keys">
          <Select<UserExchangeKeys>
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
          label={`Market Source (${state.primaryCurrency?.symbol ?? '___'}-${
            state.secondaryCurrency?.symbol ?? '____'
          })`}
        >
          <Select<Market>
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
        <Form.Item>
          <Button onClick={onCancel} htmlType="button" type="link">
            Cancel
          </Button>
          <Button htmlType="submit">Create DCA Order</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export { DCAOrderFormCreate }
