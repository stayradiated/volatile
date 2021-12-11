import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useTable, Column } from 'react-table'
import { parseISO, format } from 'date-fns'

import { Alert, Spin, Card, Table } from '../retro-ui'
import { formatCurrency } from '../../utils/format'

import {
  GetDcaOrderHistoryListQuery as Query,
  GetDcaOrderHistoryListQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { DCAOrderHistoryPriceChart } from '../dca-order-history-price-chart'
import { DCAOrderHistoryValueChart } from '../dca-order-history-value-chart'

type DCAOrderHistory = Query['kc_dca_order_history'][0]

const QUERY = gql`
  query getDCAOrderHistoryList($dcaOrderUID: uuid!) {
    kc_dca_order_by_pk(uid: $dcaOrderUID) {
      uid
      exchange {
        uid
        name
      }
      primary_currency {
        symbol
      }
      secondary_currency {
        symbol
      }
    }

    kc_dca_order_history(
      where: { dca_order_uid: { _eq: $dcaOrderUID } }
      order_by: { created_at: desc }
    ) {
      uid
      created_at
      market_price
      market_offset
      target_value
      available_balance
      created_order
      description
      value
    }
  }
`

type Props = {
  dcaOrderUID: string
}

const DCAOrderHistoryList = (props: Props) => {
  const { dcaOrderUID } = props

  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY, {
    variables: {
      dcaOrderUID,
    },
  })

  const columns = useMemo(() => {
    const columns: Array<Column<DCAOrderHistory>> = [
      {
        Header: 'Date',
        accessor: 'created_at',
        Cell: ({ value }) => format(parseISO(value), 'PPpp'),
      },
      {
        Header: 'Market Price',
        accessor: 'market_price',
        Cell: ({ value }) => `$${formatCurrency(value)}`,
      },
      {
        Header: 'Market Offset',
        accessor: 'market_offset',
        Cell: ({ value }) => `${value}%`,
      },

      {
        Header: 'Value',
        accessor: 'value',
        Cell: ({ value }) => `$${formatCurrency(value)}`,
      },
      {
        Header: 'Available Balance',
        accessor: 'available_balance',
        Cell: ({ value }) => `$${formatCurrency(value)}`,
      },
      {
        Header: 'Created Order',
        accessor: 'created_order',
        Cell: ({ value }) => (value ? 'Yes' : 'No'),
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
    ]
    return columns
  }, [])

  const table = useTable({ columns, data: data?.kc_dca_order_history ?? [] })

  if (loading) {
    return (
      <Card>
        <Spin />
      </Card>
    )
  }

  if (error) {
    return <Alert message={error.message} type="error" />
  }

  const dcaOrder = data?.kc_dca_order_by_pk!
  const exchange = dcaOrder.exchange.name
  const tradingPair = `${dcaOrder.primary_currency.symbol}-${dcaOrder.secondary_currency.symbol}`

  return (
    <Card width={1200}>
      <h2>
        ☰ DCA Order | {exchange} | {tradingPair}
      </h2>
      <DCAOrderHistoryPriceChart dcaOrderUID={dcaOrderUID} />
      <DCAOrderHistoryValueChart dcaOrderUID={dcaOrderUID} />
      <Table table={table} />
    </Card>
  )
}

export { DCAOrderHistoryList }
