import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useTable, Column } from 'react-table'

import type {
  GetExchangeListQuery as Query,
  GetExchangeListQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { Table, Button } from '../retro-ui'

import { ExchangePrimaryCurrencyFormCreate } from './ExchangePrimaryCurrencyFormCreate'
import { ExchangeSecondaryCurrencyFormCreate } from './ExchangeSecondaryCurrencyFormCreate'

type Exchange = Query['kc_exchange'][0]

const QUERY_EXCHANGE_LIST = gql`
  query getExchangeList {
    kc_exchange {
      created_at
      updated_at
      uid
      id
      name
      url
      primary_currencies {
        symbol
      }
      secondary_currencies {
        symbol
      }
    }
  }
`

const ExchangeList = () => {
  const { data, loading, error } = useQuery<Query, QueryVariables>(
    QUERY_EXCHANGE_LIST,
  )

  const columns = useMemo(() => {
    const columns: Array<Column<Exchange>> = [
      {
        Header: 'UID',
        accessor: 'uid',
        Cell: ({ value }) => (
          <pre>
            <code>{value}</code>
          </pre>
        ),
      },
      {
        Header: 'ID',
        accessor: 'id',
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
        Header: 'URL',
        accessor: 'url',
        Cell: ({ value }) => <a href={value}>{value}</a>,
      },
      {
        Header: 'Primary Currency',
        accessor: 'primary_currencies',
        Cell: ({ value }) => (
          <>
            {value.map((row) => (
              <code key={row.symbol}>{row.symbol}</code>
            ))}
          </>
        ),
      },
      {
        Header: 'Secondary Currency',
        accessor: 'secondary_currencies',
        Cell: ({ value }) => (
          <>
            {value.map((row) => (
              <code key={row.symbol}>{row.symbol}</code>
            ))}
          </>
        ),
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
    data: data?.kc_exchange ?? [],
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
      <hr />
      <ExchangePrimaryCurrencyFormCreate />
      <hr />
      <ExchangeSecondaryCurrencyFormCreate />
    </>
  )
}

export { ExchangeList }
