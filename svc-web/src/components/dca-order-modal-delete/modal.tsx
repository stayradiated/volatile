import { gql, useQuery } from '@apollo/client'

import type {
  GetDcaOrderModalDeleteQuery as Query,
  GetDcaOrderModalDeleteQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { Card, Button, Spin, Alert } from '../retro-ui'

import { useDeleteDCAOrder } from './mutation-delete'

const QUERY = gql`
  query getDCAOrderModalDelete($dcaOrderUID: uuid!) {
    kc_dca_order_by_pk(uid: $dcaOrderUID) {
      uid
      exchange {
        uid
        name
      }
      enabled_at
      daily_average
      start_at
      market_offset
      primary_currency {
        symbol
      }
      secondary_currency {
        symbol
      }
      min_value
      max_value
    }
  }
`

type Props = {
  isOpen?: boolean
  dcaOrderUID: string
  onCancel?: () => void
  onFinish?: () => void
}

const DCAOrderModalDelete = (props: Props) => {
  const { isOpen, dcaOrderUID, onCancel, onFinish } = props

  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY, {
    skip: !isOpen,
    variables: {
      dcaOrderUID,
    },
  })

  const deleteDCAOrder = useDeleteDCAOrder()

  if (loading) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  if (!isOpen) {
    return null
  }

  const order = data?.kc_dca_order_by_pk!

  const handleDelete = async () => {
    await deleteDCAOrder(order.uid)
    if (typeof onFinish === 'function') {
      onFinish()
    }
  }

  return (
    <Card>
      <div>Are you sure you want to delete DCA Order {order.uid}?</div>
      <Button type="link" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="primary" onClick={handleDelete}>
        Delete
      </Button>
    </Card>
  )
}

export { DCAOrderModalDelete }
