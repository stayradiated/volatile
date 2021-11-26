import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Card, Descriptions, Button, Modal, ModalProps } from 'antd'
import { parseISO, formatRelative } from 'date-fns'


import {
  GetDcaOrderListQuery,
  GetDcaOrderListQueryVariables,
} from '../../utils/graphql'

import { UpdateDCAOrderForm } from '../dca-order-form-update'

type DCAOrder = GetDcaOrderListQuery['kc_dca_order'][0]

const QUERY_DCA_ORDER_LIST = gql`
  query getDCAOrderList {
    kc_dca_order {
      uid
      exchange {
        uid
        id
        name
      }
      market {
        uid
        id
        name
      }
      daily_average
      start_at
      market_offset

      primary_currency
      secondary_currency

      min_price
      max_price
      min_value
      max_value

      user_exchange_keys {
        description
        uid
      }

      dca_order_histories(limit: 5, order_by: { created_at: desc }) {
        uid

        created_at
        market_price
        market_offset
        available_balance
        target_value
        created_order
        description
        primary_currency
        secondary_currency

        order {
          price
          volume
          value
        }
      }
    }
  }
`

type Props = { dcaOrderUID: string} & ModalProps

const EditDCAOrderModal = (props: Props) => {
  const { dcaOrderUID, ...otherProps } = props

  return (
    <Modal {...otherProps}>
      <UpdateDCAOrderForm dcaOrderUID={dcaOrderUID}/>
    </Modal>
  )
}

type DCAOrderListItemProps = {
  dcaOrder: DCAOrder
}

const DCAOrderListItem = (props: DCAOrderListItemProps) => {
  const { dcaOrder } = props  
  const { uid, exchange, market, daily_average, start_at, market_offset, primary_currency, secondary_currency, min_value, max_value } = dcaOrder

  const [ isEditing, setIsEditing ] = useState(false)

  const handleEdit = () => {
    setIsEditing(true)
  }
  const handleEditCancel = () => {
    setIsEditing(false)
  }

  return (
    <Card title={exchange.name} extra={<Button type='text' onClick={handleEdit}>Edit</Button>}>
      <EditDCAOrderModal visible={isEditing} dcaOrderUID={uid} onCancel={handleEditCancel} />

      <Descriptions>
        <Descriptions.Item label='Market'>{market.name}</Descriptions.Item>
        <Descriptions.Item label='Primary Currency'>{primary_currency}</Descriptions.Item>
        <Descriptions.Item label='Secondary Currency'>{secondary_currency}</Descriptions.Item>
        <Descriptions.Item label='Daily Average'>{daily_average}</Descriptions.Item>
        <Descriptions.Item label='Start At'>{start_at}</Descriptions.Item>
        <Descriptions.Item label='Market Offset'>{market_offset}%</Descriptions.Item>
        <Descriptions.Item label='Min Value'>{min_value ?? '-'}</Descriptions.Item>
        <Descriptions.Item label='Max Value'>{max_value ?? '-'}</Descriptions.Item>
      </Descriptions>

      {dcaOrder.dca_order_histories.map((history) => {
        const { created_at, market_price, market_offset, available_balance, target_value, created_order, description, primary_currency, secondary_currency, order } = history

        const title = formatRelative(parseISO(created_at), new Date())

        return (
          <Card key={history.uid} type='inner' title={ title }>
            <Descriptions bordered>
              <Descriptions.Item label='Primary Currency'>{primary_currency}</Descriptions.Item>
              <Descriptions.Item label='Secondary Currency'>{secondary_currency}</Descriptions.Item>
              <Descriptions.Item label='Market Price'>${market_price}</Descriptions.Item>
              <Descriptions.Item label='Market Offset'>{market_offset}%</Descriptions.Item>
              <Descriptions.Item label='Available Balance'>${available_balance}</Descriptions.Item>
              <Descriptions.Item label='Target Value'>${target_value}</Descriptions.Item>
              <Descriptions.Item label='Created Order'>{String(created_order)}</Descriptions.Item>
              <Descriptions.Item label='Description' span={2}>{description}</Descriptions.Item>
              <Descriptions.Item label='Order Price'>{order?.price ?? '-'}</Descriptions.Item>
              <Descriptions.Item label='Order Volume'>{order?.volume ?? '-'}</Descriptions.Item>
              <Descriptions.Item label='Order Value'>{order?.value ?? '-'}</Descriptions.Item>
            </Descriptions>
          </Card>
        )
      })}
    </Card>
  )
}

const DCAOrderList = () => {
  const { data, loading, error } = useQuery<
    GetDcaOrderListQuery,
    GetDcaOrderListQueryVariables
  >(QUERY_DCA_ORDER_LIST)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <div>
      <h4>DCA Order List</h4>
      {(data?.kc_dca_order ?? []).map((dcaOrder) => (
        <DCAOrderListItem key={dcaOrder.uid} dcaOrder={dcaOrder} />
      ))}
    </div>
  )
}

export { DCAOrderList }
