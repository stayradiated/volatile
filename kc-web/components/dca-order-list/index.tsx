import { gql, useQuery } from '@apollo/client'

import {
  GetDcaOrderListQuery,
  GetDcaOrderListQueryVariables,
} from '../../utils/graphql'

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

      min_price
      max_price
      min_value
      max_value

      user_exchange_keys {
        description
        uid
      }
    }
  }
`

type DCAOrderListItemProps = {
  dcaOrder: DCAOrder
}

const DCAOrderListItem = (props: DCAOrderListItemProps) => {
  const { dcaOrder } = props
  const {
    exchange,
    market,
    uid,
    daily_average,
    market_offset,
    min_price,
    max_price,
    min_value,
    max_value,
  } = dcaOrder
  return (
    <tr>
      <td>{exchange.name}</td>
      <td>{market.name}</td>
      <td>
        <code>{uid}</code>
      </td>
      <td>
        <code>{daily_average}</code>
      </td>
      <td>
        <code>{market_offset}</code>
      </td>
      <td>
        <code>{min_price}</code>
      </td>
      <td>
        <code>{max_price}</code>
      </td>
      <td>
        <code>{min_value}</code>
      </td>
      <td>
        <code>{max_value}</code>
      </td>
    </tr>
  )
}

const DCAOrderList = () => {
  const { data, loading, error } = useQuery<
    GetDcaOrderListQuery,
    GetDcaOrderListQueryVariables
  >(QUERY_DCA_ORDER_LIST)

  if (loading) {
    return <p>loading DCA order list…</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  if (!data) {
    return <p>No data…</p>
  }

  const children = data.kc_dca_order.map((dcaOrder: DCAOrder) => (
    <DCAOrderListItem key={dcaOrder.uid} dcaOrder={dcaOrder} />
  ))

  return (
    <div>
      <h4>DCA Order List</h4>
      <table>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export { DCAOrderList }
