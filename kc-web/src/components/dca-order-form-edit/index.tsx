import Select from 'react-select'
import moment, { Moment } from 'moment'
import { DatePicker } from 'antd'
import { gql, useQuery } from '@apollo/client'
import { parseISO } from 'date-fns'
import { useState, useEffect } from 'react'

import { Alert, Spin, Form, Input, Button } from '../retro-ui/index'

import {
  GetDcaOrderFormEditQuery as Query,
  GetDcaOrderFormEditQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { useUpdateDCAOrder } from './mutation-update'

const QUERY_DCA_ORDER_FORM = gql`
  query getDCAOrderFormEdit($dcaOrderUID: uuid!) {
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
      exchange_uid
      description
    }
    kc_dca_order_by_pk(uid: $dcaOrderUID) {
      uid
      user_exchange_keys_uid
      exchange_uid
      market_uid
      start_at
      market_offset
      daily_average
      primary_currency {
        symbol
        name
      }
      secondary_currency {
        symbol
        name
      }
      min_value
      max_value
      exchange {
        uid
        name
      }
    }
  }
`

type UserExchangeKeys = Query['kc_user_exchange_keys'][0]
type Market = Query['kc_market'][0]

type FormState = {
  userExchangeKeys: null | UserExchangeKeys
  market: null | Market
  startAt: null | Moment
  marketOffset: string
  dailyAverage: string
  minValue: string
  maxValue: string
}

type Props = {
  dcaOrderUID: string
  onCancel?: () => void
  onFinish?: () => void
}

const DCAOrderFormEdit = (props: Props) => {
  const { dcaOrderUID, onCancel, onFinish } = props

  const { data, loading, error } = useQuery<Query, QueryVariables>(
    QUERY_DCA_ORDER_FORM,
    {
      variables: {
        dcaOrderUID,
      },
    },
  )

  const updateDCAOrder = useUpdateDCAOrder()

  const [state, setState] = useState<FormState>({
    userExchangeKeys: null,
    market: null,
    startAt: null,
    minValue: '',
    maxValue: '',
    dailyAverage: '',
    marketOffset: '',
  })

  const handleFinish = async () => {
    if (!order?.uid) {
      throw new Error('No DCA Order UID')
    }

    if (!state.userExchangeKeys?.uid) {
      throw new Error('No User Exchange Keys')
    }

    if (!state.market?.uid) {
      throw new Error('No Market')
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

    await updateDCAOrder(order.uid, {
      userExchangeKeysUID: state.userExchangeKeys.uid,
      marketUID: state.market.uid,
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

  const order = data?.kc_dca_order_by_pk

  const marketOptions = (data?.kc_market ?? []).filter((item) => {
    return item.market_prices.some((price) => {
      return (
        price.asset_symbol === order?.primary_currency.symbol &&
        price.currency === order?.secondary_currency.symbol
      )
    })
  })

  const userExchangeKeysOptions = (data?.kc_user_exchange_keys ?? []).filter(
    (item) => item.exchange_uid === order?.exchange.uid,
  )

  useEffect(() => {
    if (order) {
      setState({
        userExchangeKeys:
          userExchangeKeysOptions.find(
            (item) => item.uid === order.user_exchange_keys_uid,
          ) ?? null,
        market:
          marketOptions.find((item) => item.uid === order.market_uid) ?? null,
        startAt: moment(parseISO(order.start_at)),
        minValue: String(order.min_value) ?? '',
        maxValue: String(order.max_value) ?? '',
        dailyAverage: String(order.daily_average) ?? '',
        marketOffset: String(order.market_offset) ?? '',
      })
    }
  }, [order])

  if (loading) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  return (
    <>
      <h2>~ Edit DCA Order</h2>
      <Form
        name="dcaOrderFormEdit"
        state={state}
        onChange={setState}
        onFinish={handleFinish}
      >
        <Form.Item label="Exchange">
          <Input disabled value={order?.exchange.name ?? ''} />
        </Form.Item>
        <Form.Item label="API Keys" name="userExchangeKeys">
          <Select<UserExchangeKeys>
            options={userExchangeKeysOptions}
            getOptionLabel={(option) => option.description}
            getOptionValue={(option) => option.uid}
          />
        </Form.Item>
        <Form.Item label="Asset">
          <Input
            disabled
            value={`${order?.primary_currency.symbol} | ${order?.primary_currency.name}`}
          />
        </Form.Item>
        <Form.Item label="Currency">
          <Input
            disabled
            value={`${order?.secondary_currency.symbol} | ${order?.secondary_currency.name}`}
          />
        </Form.Item>
        <Form.Item label="Market" name="market">
          <Select<Market>
            options={marketOptions}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.uid}
          />
        </Form.Item>
        <Form.Item label="Start Date" name="startAt">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Market Offset" name="marketOffset">
          <Input type="number" step="0.01" />
        </Form.Item>
        <Form.Item label="Daily Average" name="dailyAverage">
          <Input type="number" step="0.01" />
        </Form.Item>
        <Form.Item label="Min Value" name="minValue">
          <Input type="number" step="0.01" min={0} />
        </Form.Item>
        <Form.Item label="Max Value" name="maxValue">
          <Input type="number" step="0.01" min={0} />
        </Form.Item>
        <Form.Item>
          <Button type="link" htmlType="button" onClick={onCancel}>
            Cancel
          </Button>
          <Button htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export { DCAOrderFormEdit }
