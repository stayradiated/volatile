import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useTable, Column } from 'react-table'
import { parseISO, differenceInHours } from 'date-fns'
import { Spin, Alert } from 'antd'

import { Table, Button } from '../retro-ui'
import { formatCurrency } from '../../utils/format'

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

      min_price
      max_price
      min_value
      max_value

      user_exchange_keys {
        description
        uid
      }

      dca_order_histories(limit: 1, order_by: { created_at: desc }) {
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

// Const DCAOrderListItem = (props: DCAOrderListItemProps) => {
// return (
{
  /*   <EditDCAOrderModal */
}

{
  /*     Visible={isEditing} */
}

{
  /*     DcaOrderUID={uid} */
}

{
  /*     OnCancel={handleEditCancel} */
}

{
  /*   /> */
}

{
  /*  */
}

{
  /*   <Descriptions> */
}

{
  /*     <Descriptions.Item label="Market">{market.name}</Descriptions.Item> */
}

{
  /*     <Descriptions.Item label="Primary Currency"> */
}

{
  /*       {primary_currency} */
}

{
  /*     </Descriptions.Item> */
}

{
  /*     <Descriptions.Item label="Secondary Currency"> */
}

{
  /*       {secondary_currency} */
}

{
  /*     </Descriptions.Item> */
}

{
  /*     <Descriptions.Item label="Daily Average"> */
}

{
  /*       {daily_average} */
}

{
  /*     </Descriptions.Item> */
}

{
  /*     <Descriptions.Item label="Start At">{start_at}</Descriptions.Item> */
}

{
  /*     <Descriptions.Item label="Market Offset"> */
}

{
  /*       {market_offset}% */
}

{
  /*     </Descriptions.Item> */
}

{
  /*     <Descriptions.Item label="Min Value"> */
}

{
  /*       {min_value ?? '-'} */
}

{
  /*     </Descriptions.Item> */
}

{
  /*     <Descriptions.Item label="Max Value"> */
}

{
  /*       {max_value ?? '-'} */
}

{
  /*     </Descriptions.Item> */
}

{
  /*   </Descriptions> */
}

{
  /*  */
}

{
  /*   {dcaOrder.dca_order_histories.map((history) => { */
}

{
  /*     Const { */
}

{
  /*       Created_at, */
}

{
  /*       Market_price, */
}

{
  /*       Market_offset, */
}

{
  /*       Available_balance, */
}

{
  /*       Target_value, */
}

{
  /*       Created_order, */
}

{
  /*       Description, */
}

{
  /*       Primary_currency, */
}

{
  /*       Secondary_currency, */
}

{
  /*       Order, */
}

{
  /*     } = history */
}

{
  /*  */
}

{
  /*     Const title = formatRelative(parseISO(created_at), new Date()) */
}

{
  /*  */
}

{
  /*     Return ( */
}

{
  /*       <Card key={history.uid} type="inner" title={title}> */
}

{
  /*         <Descriptions bordered> */
}

{
  /*           <Descriptions.Item label="Primary Currency"> */
}

{
  /*             {primary_currency} */
}

{
  /*           </Descriptions.Item> */
}

{
  /*           <Descriptions.Item label="Secondary Currency"> */
}

{
  /*             {secondary_currency} */
}

{
  /*           </Descriptions.Item> */
}

{
  /*           <Descriptions.Item label="Market Price"> */
}

{
  /*             ${market_price} */
}

{
  /*           </Descriptions.Item> */
}

{
  /*           <Descriptions.Item label="Market Offset"> */
}

{
  /*             {market_offset}% */
}

{
  /*           </Descriptions.Item> */
}

{
  /*           <Descriptions.Item label="Available Balance"> */
}

{
  /*             ${available_balance} */
}

{
  /*           </Descriptions.Item> */
}

{
  /*           <Descriptions.Item label="Target Value"> */
}

{
  /*             ${target_value} */
}

{
  /*           </Descriptions.Item> */
}

{
  /*           <Descriptions.Item label="Created Order"> */
}

{
  /*             {String(created_order)} */
}

{
  /*           </Descriptions.Item> */
}

{
  /*           <Descriptions.Item label="Description" span={2}> */
}

{
  /*             {description} */
}

{
  /*           </Descriptions.Item> */
}

{
  /*           <Descriptions.Item label="Order Price"> */
}

{
  /*             {order?.price ?? '-'} */
}

{
  /*           </Descriptions.Item> */
}

{
  /*           <Descriptions.Item label="Order Volume"> */
}

{
  /*             {order?.volume ?? '-'} */
}

{
  /*           </Descriptions.Item> */
}

{
  /*           <Descriptions.Item label="Order Value"> */
}

{
  /*             {order?.value ?? '-'} */
}

{
  /*           </Descriptions.Item> */
}

{
  /*         </Descriptions> */
}

{
  /*       </Card> */
}

{
  /*     ) */
}

{
  /*   })} */
}

{
  /* </Card> */
}
// )
// }

type Props = {
  onEdit: (dcaOrderUID: string) => void
}

const DCAOrderList = (props: Props) => {
  const { onEdit } = props

  const { data, loading, error } = useQuery<
    GetDcaOrderListQuery,
    GetDcaOrderListQueryVariables
  >(QUERY_DCA_ORDER_LIST)

  const columns = useMemo(() => {
    const columns: Array<Column<DCAOrder>> = [
      {
        Header: 'Enabled',
        accessor: 'enabled_at',
        Cell: ({ value }) => (value ? 'Yes' : 'No'),
      },
      {
        Header: 'Exchange',
        accessor: (row) => row.exchange.name,
      },
      {
        Header: 'Asset',
        accessor: (row) => row.primary_currency.symbol,
      },
      {
        Header: 'Currency',
        accessor: (row) => row.secondary_currency.symbol,
      },
      {
        Header: 'Daily Average',
        accessor: 'daily_average',
        Cell: ({ value }) => `$${formatCurrency(value)}`,
      },
      {
        Header: 'Start At',
        accessor: 'start_at',
        Cell: ({ value }) => {
          return (
            (differenceInHours(new Date(), parseISO(value)) / 24).toFixed(2) +
            ' days'
          )
        },
      },
      {
        Header: 'Min Value',
        accessor: 'min_value',
        Cell: ({ value }) => (value ? `$${formatCurrency(value)}` : '$0.00'),
      },
      {
        Header: 'Max Value',
        accessor: 'max_value',
        Cell: ({ value }) => (value ? `$${formatCurrency(value)}` : '∞'),
      },
      {
        Header: 'Actions',
        accessor: 'uid',
        Cell: ({ value }) => {
          const handleEdit = () => {
            onEdit(value)
          }

          const handlePause = () => {
            alert('pause')
          }

          return (
            <>
              <Button htmlType="button" onClick={handleEdit}>
                Edit
              </Button>
              <Button htmlType="button" onClick={handlePause}>
                Pause
              </Button>
            </>
          )
        },
      },
    ]
    return columns
  }, [])

  const table = useTable({ columns, data: data?.kc_dca_order ?? [] })

  if (loading) {
    return <Spin />
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  return (
    <div>
      <h2>☰ DCA Order List</h2>
      <Table table={table} />
    </div>
  )
}

export { DCAOrderList }
