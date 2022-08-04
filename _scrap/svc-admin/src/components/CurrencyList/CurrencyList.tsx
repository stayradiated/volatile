import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useTable, Column } from 'react-table'

import type {
  GetCurrencyListQuery as Query,
  GetCurrencyListQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { Table, Button } from '../retro-ui'

import { CurrencyFormCreate } from './CurrencyFormCreate'

type Currency = Query['kc_currency'][0]

const QUERY = gql`
  query getCurrencyList {
    kc_currency {
      created_at
      updated_at
      symbol
      name
    }
  }
`

const CurrencyList = () => {
  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY)

  const columns = useMemo(() => {
    const columns: Array<Column<Currency>> = [
      {
        Header: 'Symbol',
        accessor: 'symbol',
        Cell: ({ value }) => (
          <pre>
            <code>{value}</code>
          </pre>
        ),
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Actions',
        Cell: () => <Button>Edit</Button>,
      },
    ]
    return columns
  }, [])

  const table = useTable({
    columns,
    data: data?.kc_currency ?? [],
  })

  if (loading) {
    return <>Loading...</>
  }

  if (error) {
    throw error
  }

  return (
    <>
      <Table table={table} />
      <CurrencyFormCreate />
    </>
  )
}

export { CurrencyList }
