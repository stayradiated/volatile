import { gql, useQuery } from '@apollo/client'

const QUERY_DCA_ORDER_LIST = gql`
  query dca_order_list {
    kc_dca_order{
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
      
      min_price_nzd
      max_price_nzd
      min_amount_nzd
      max_amount_nzd
      
      user_exchange_keys {
        description
        uid
      }
    }
  }
`

type DCAOrder = {
  uid: string,
  exchange: { uid: string, id: string, name: string, },
  market: { uid: string, id: string, name: string, },
  daily_average: number,
  start_at: string,
  market_offset: number,
  
  min_price_nzd: number,
  max_price_nzd: number,
  min_amount_nzd: number,
  max_amount_nzd: number,
  
  user_exchange_keys: {
    description: string,
    uid: string,
  }
}

type DCAOrderListItemProps = {
  dcaOrder: DCAOrder
}

const DCAOrderListItem = (props: DCAOrderListItemProps) => {
  const { dcaOrder } = props
  const { exchange, market, uid, market_offset, min_price_nzd, max_price_nzd, min_amount_nzd, max_amount_nzd } = dcaOrder
  return (
    <tr>
      <td>{exchange.name}</td>
      <td>{market.name}</td>
      <td><code>{uid}</code></td>
      <td><code>{market_offset}</code></td>
      <td><code>{min_price_nzd}</code></td>
      <td><code>{max_price_nzd}</code></td>
      <td><code>{min_amount_nzd}</code></td>
      <td><code>{max_amount_nzd}</code></td>
    </tr>
  )
}

const DCAOrderList = () => {
  const { data, loading, error } = useQuery(QUERY_DCA_ORDER_LIST);

  if (loading) {
    return <p>loading DCA order list...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  const children = data.kc_dca_order.map((dcaOrder: DCAOrder) => (
    <DCAOrderListItem key={dcaOrder.uid} dcaOrder={dcaOrder} />
  ))

  return (
    <div>
      <h4>DCA Order List</h4>
      <table>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  )
}

export { DCAOrderList }
