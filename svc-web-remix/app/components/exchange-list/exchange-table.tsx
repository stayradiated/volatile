import { useMemo } from 'react'
import { useTable, Column } from 'react-table'

import { Table } from '~/components/retro-ui'
import { formatCurrency } from '~/components/format'
import type { GetExchangeListQuery as Query } from '~/graphql/generated'

type UserExchangeKey = Query['kc_user_exchange_keys'][0]
type LatestBalance = NonNullable<UserExchangeKey['balance_latest']>[0]
type HistoricBalance = NonNullable<UserExchangeKey['balance_historic']>[0]

type Row = LatestBalance & {
  historic: HistoricBalance
}

type Props = {
  userExchangeKey: UserExchangeKey
}

const ExchangeTable = (props: Props) => {
  const { userExchangeKey } = props

  const columns = useMemo(() => {
    const columns: Array<Column<Row>> = [
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
        Cell: ({ value }) => <>{formatCurrency(value ?? undefined)}</>,
        Footer({ rows }) {
          const total = rows.reduce(
            (sum, row) => row.values.total_balance_nzd + sum,
            0,
          )
          return <>{formatCurrency(total)}</>
        },
      },
      {
        id: 'change',
        Header: '24 Hour Change',
        accessor(row): number {
          return (
            (row.total_balance_nzd ?? 0) -
            (row.historic?.total_balance_nzd ?? 0)
          )
        },
        Cell: ({ value }: { value: number }) => <>{formatCurrency(value)}</>,
        Footer({ rows }) {
          const total = rows.reduce((sum, row) => row.values.change + sum, 0)
          return <>{formatCurrency(total)}</>
        },
      },
    ]
    return columns
  }, [])

  const data: Row[] = useMemo(() => {
    if (!userExchangeKey) {
      return []
    }

    const historic = Object.fromEntries(
      userExchangeKey.balance_historic!.map((row) => [
        row.currency_symbol,
        row,
      ]),
    )

    return userExchangeKey.balance_latest!.map((row) => ({
      ...row,
      historic: historic[row.currency_symbol],
    }))
  }, [userExchangeKey])

  const table = useTable({
    columns,
    data,
  })

  return (
    <>
      <h2>{userExchangeKey.exchange.name} </h2>
      <Table table={table} />
    </>
  )
}

export { ExchangeTable }
