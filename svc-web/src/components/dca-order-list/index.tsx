import { useMemo, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useTable, Column } from 'react-table'
import { parseISO, differenceInHours } from 'date-fns'

import { Spin, Alert, Card, Table, Button, Dropdown } from '../retro-ui'
import { formatCurrency } from '../../utils/format'

import { DCAOrderModalDelete } from '../dca-order-modal-delete'

import type {
  GetDcaOrderListQuery as Query,
  GetDcaOrderListQueryVariables as QueryVariables,
} from '../../utils/graphql'

import { useUpdateDCAOrderEnabledAt } from './mutation-pause'

type DCAOrder = Query['kc_dca_order'][0]

const QUERY = gql`
  query getDCAOrderList {
    kc_dca_order(order_by: { enabled_at: desc_nulls_last }) {
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
      interval_ms
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
  onView?: (dcaOrderUID: string) => void
  onEdit?: (dcaOrderUID: string) => void
  onCreate?: () => void
}

const DCAOrderList = (props: Props) => {
  const { onView, onEdit, onCreate } = props

  const { data, loading, error } = useQuery<Query, QueryVariables>(QUERY)

  const updateEnabledAt = useUpdateDCAOrderEnabledAt()

  const [deleteState, setDeleteState] = useState<string | undefined>(undefined)
  const handleCloseDeleteModal = () => {
    setDeleteState(undefined)
  }

  const columns = useMemo(() => {
    const columns: Array<Column<DCAOrder>> = [
      {
        Header: 'Status',
        accessor: 'enabled_at',
        Cell: ({ value: enabledAt, row }) => {
          const handleTogglePause = async () => {
            await (enabledAt
              ? updateEnabledAt(row.original.uid, null)
              : updateEnabledAt(row.original.uid, new Date().toISOString()))
          }

          return (
            <Button htmlType="button" onClick={handleTogglePause}>
              {enabledAt ? 'ACTIVE' : 'PAUSED'}
            </Button>
          )
        },
      },
      {
        Header: 'Exchange',
        accessor: (row) => row.exchange.name,
      },
      {
        Header: 'Trading Pair',
        accessor: (row) => {
          return `${row.primary_currency.symbol}-${row.secondary_currency.symbol}`
        },
      },
      {
        Header: 'Market Offset',
        accessor: 'market_offset',
        Cell: ({ value }) => `${value}%`,
      },
      {
        Header: 'Daily Average',
        accessor: 'daily_average',
        Cell: ({ value }) => formatCurrency(value)
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
        Header: 'Interval',
        accessor: 'interval_ms',
        Cell: ({ value }) => value / 60 / 1000 + ' min',
      },
      {
        Header: 'Min Value',
        accessor: 'min_value',
        Cell: ({ value }) => (value ? formatCurrency(value) : '$0.00'),
      },
      {
        Header: 'Max Value',
        accessor: 'max_value',
        Cell: ({ value }) => (value ? formatCurrency(value) : '∞'),
      },
      {
        Header: 'Actions',
        accessor: 'uid',
        Cell: (props) => {
          const { value } = props

          const handleView = () => {
            if (typeof onView === 'function') {
              onView(value)
            }
          }

          const handleEdit = () => {
            if (typeof onEdit === 'function') {
              onEdit(value)
            }
          }

          const handleDelete = async () => {
            setDeleteState(value)
          }

          return (
            <Dropdown>
              <Dropdown.Item onClick={handleView}>View</Dropdown.Item>
              <Dropdown.Item onClick={handleEdit}>Edit</Dropdown.Item>
              <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
            </Dropdown>
          )
        },
      },
    ]
    return columns
  }, [])

  const tableData = useMemo(() => {
    return (data?.kc_dca_order ?? []).map((row) => {
      return {
        ...row,
        [Table.DISABLED]: !row.enabled_at,
      }
    })
  }, [data])

  const table = useTable({ columns, data: tableData })

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

  return (
    <>
      <Card width={1000}>
        <h2>☰ DCA Order List</h2>
        <Table table={table} />
        <Button onClick={onCreate}>Create DCA Order</Button>
      </Card>
      <DCAOrderModalDelete
        isOpen={Boolean(deleteState)}
        dcaOrderUID={deleteState ?? ''}
        onCancel={handleCloseDeleteModal}
        onFinish={handleCloseDeleteModal}
      />
    </>
  )
}

export { DCAOrderList }
