import { useMemo, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useTable, Column } from 'react-table'
import { parseISO, format } from 'date-fns'

import { Alert, Card, Table, Button, Dropdown, Spin } from '../retro-ui'

import { useValidateUserExchangeKeys } from '../../hooks/mutations/use-validate-user-exchange-keys'

import type {
  GetUserExchangeKeysListQuery,
  GetUserExchangeKeysListQueryVariables,
} from '../../utils/graphql'

import { UserExchangeKeysModalDelete } from '../user-exchange-keys-modal-delete'

type UserExchangeKeys = GetUserExchangeKeysListQuery['kc_user_exchange_keys'][0]

const QUERY = gql`
  query getUserExchangeKeysList {
    kc_user_exchange_keys {
      uid
      description
      updated_at
      exchange {
        uid
        name
      }
      dca_orders_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`

type Props = {
  onCreate?: () => void
  onEdit?: (userExchangeKeysUID: string) => void
}

const UserExchangeKeysList = (props: Props) => {
  const { onCreate, onEdit } = props

  const [deleteState, setDeleteState] = useState<string | undefined>(undefined)
  const handleCloseDeleteModal = () => {
    setDeleteState(undefined)
  }

  const { validateUserExchangeKeys } = useValidateUserExchangeKeys()

  const { data, loading, error } = useQuery<
    GetUserExchangeKeysListQuery,
    GetUserExchangeKeysListQueryVariables
  >(QUERY)

  const columns = useMemo(() => {
    const columns: Array<Column<UserExchangeKeys>> = [
      { Header: 'Exchange', accessor: (row) => row.exchange.name },
      { Header: 'Keys', accessor: 'description' },
      {
        Header: 'Last Modified',
        accessor: 'updated_at',
        Cell(props) {
          const { value } = props
          return format(parseISO(value), 'PPpp')
        },
      },
      {
        Header: '# DCA Orders',
        accessor: (row) => row.dca_orders_aggregate.aggregate?.count,
      },
      {
        Header: 'Actions',
        accessor: 'uid',
        Cell(props) {
          const userExchangeKeysUID = props.value

          const handleEdit = () => {
            if (typeof onEdit === 'function') {
              onEdit(userExchangeKeysUID)
            }
          }

          const handleDelete = () => {
            setDeleteState(userExchangeKeysUID)
          }

          const handleValidate = async () => {
            const result = await validateUserExchangeKeys({
              userExchangeKeysUID,
            })
            alert(JSON.stringify(result))
          }

          return (
            <Dropdown>
              <Dropdown.Item onClick={handleEdit}>Edit</Dropdown.Item>
              <Dropdown.Item onClick={handleValidate}>Validate</Dropdown.Item>
              <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
            </Dropdown>
          )
        },
      },
    ]
    return columns
  }, [])

  const table = useTable({
    columns,
    data: data?.kc_user_exchange_keys ?? [],
  })

  if (loading) {
    return (
      <Card>
        <Spin />
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <Alert message={error.message} type="error" />
      </Card>
    )
  }

  return (
    <>
      <Card width={1000}>
        <h2>☰ Exchange API List</h2>
        <Table table={table} />
        <Button type="primary" onClick={onCreate}>
          Add API Keys
        </Button>
      </Card>
      <UserExchangeKeysModalDelete
        isOpen={Boolean(deleteState)}
        userExchangeKeysUID={deleteState ?? ''}
        onCancel={handleCloseDeleteModal}
        onFinish={handleCloseDeleteModal}
      />
    </>
  )
}

export { UserExchangeKeysList }
