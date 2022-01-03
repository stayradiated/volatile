import { useMemo } from 'react'
import { useTable, Column } from 'react-table'

import { Table } from '../retro-ui'

import { formatCurrency } from '../../utils/format'

import type { GetExchangeListQuery as Query } from '../../utils/graphql'

type Exchange = Query['kc_exchange'][0]
type Balance = Exchange['balance_latest'][0]

type Props = {
  exchange: Exchange
}

const ExchangeTable = (props: Props) => {
  const { exchange } = props

  const columns = useMemo(() => {
    const columns: Array<Column<Balance>> = [
      {
        Header: 'Currency',
        accessor: 'currency_symbol',
        Footer: 'Total',
      },
      {
        Header: 'Available Balance',
        accessor: 'available_balance',
        Footer: '-.--',
      },
      {
        Header: 'Total Balance',
        accessor: 'total_balance',
        Footer: '-.--',
      },
      {
        Header: 'Total Balance (NZD)',
        accessor: 'total_balance_nzd',
        Cell: ({ value }) => '$' + formatCurrency(value),
        Footer: ({ rows }) => {
          const total = rows.reduce(
            (sum, row) => row.values.total_balance_nzd + sum,
            0,
          )
          return '$' + formatCurrency(total)
        },
      },
    ]
    return columns
  }, [])

  const table = useTable({
    columns,
    data: exchange.balance_latest,
  })

  const connected = exchange.user_exchange_keys_aggregate.aggregate!.count > 0

  return (
    <>
      <h2>
        {exchange.name}{' '}
        <code>[{connected ? 'Connected' : 'Disconnected'}]</code>
      </h2>
      <Table table={table} />
    </>
  )
}

export { ExchangeTable }
