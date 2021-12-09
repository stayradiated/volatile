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

import { useDeleteDCAOrder } from './mutation-delete'
import { useUpdateDCAOrderEnabledAt } from './mutation-pause'

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
  onEdit: (dcaOrderUID: string) => void
  onCreate: () => void
}

const DCAOrderList = (props: Props) => {
  const { onEdit, onCreate } = props

  const { data, loading, error } = useQuery<
    GetDcaOrderListQuery,
    GetDcaOrderListQueryVariables
  >(QUERY_DCA_ORDER_LIST)

  const deleteDCAOrder = useDeleteDCAOrder()
  const updateEnabledAt = useUpdateDCAOrderEnabledAt()

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
        Cell: (props) => {
          const { value, row } = props

          const handleEdit = () => {
            onEdit(value)
          }

          const handleTogglePause = async () => {
            await (row.original.enabled_at
              ? updateEnabledAt(value, null)
              : updateEnabledAt(value, new Date().toISOString()))
          }

          const handleDelete = async () => {
            await deleteDCAOrder(value)
          }

          return (
            <>
              <Button htmlType="button" onClick={handleEdit}>
                Edit
              </Button>
              <Button htmlType="button" onClick={handleTogglePause}>
                {row.original.enabled_at ? 'Pause' : 'Resume'}
              </Button>
              <Button htmlType="button" onClick={handleDelete}>
                Delete
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
      <Button onClick={onCreate}>Create DCA Order</Button>
    </div>
  )
}

export { DCAOrderList }
