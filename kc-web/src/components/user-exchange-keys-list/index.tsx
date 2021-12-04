import { useCallback, useMemo } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import { useTable, Column } from 'react-table'

import { Table, Button } from '../retro-ui'

import { useValidateUserExchangeKeys } from '../../hooks/mutations/use-validate-user-exchange-keys'

import type {
  GetUserExchangeKeysListQuery,
  GetUserExchangeKeysListQueryVariables,
} from '../../utils/graphql'

import { useDeleteUserExchangeKeys } from './mutation-delete'

type UserExchangeKeys = GetUserExchangeKeysListQuery['kc_user_exchange_keys'][0]

const QUERY = gql`
  query getUserExchangeKeysList {
    kc_user_exchange_keys {
      uid
      description
      exchange {
        uid
        name
      }
      invalidated_at
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

  const deleteUserExchangeKeys = useDeleteUserExchangeKeys()
  const { validateUserExchangeKeys } = useValidateUserExchangeKeys()

  const { data, loading, error } = useQuery<
    GetUserExchangeKeysListQuery,
    GetUserExchangeKeysListQueryVariables
  >(QUERY)

  const columns = useMemo(() => {
    const columns: Array<Column<UserExchangeKeys>> = [
      { Header: 'Description', accessor: 'description' },
      { Header: 'Exchange', accessor: (row) => row.exchange.name },
      { Header: 'Invalidated At', accessor: 'invalidated_at' },
      {
        Header: '# DCA Orders',
        accessor: (row) => row.dca_orders_aggregate.aggregate?.count,
      },
      {
        Header: 'Actions',
        accessor: 'uid',
        Cell: (props) => {
          const userExchangeKeysUID = props.value

          const handleEdit = () => {
            if (typeof onEdit === 'function') {
              onEdit(userExchangeKeysUID)
            }
          }

          const handleDelete = () => {
            deleteUserExchangeKeys(userExchangeKeysUID)
          }

          const handleValidate = async() => {
            await validateUserExchangeKeys({ userExchangeKeysUID })
          }

          return (
            <>
              <Button onClick={handleEdit}>Edit</Button>
              <Button onClick={handleValidate}>Validate</Button>
              <Button onClick={handleDelete}>Delete</Button>
            </>
          )
        },
      },
    ]
    return columns
  }, [deleteUserExchangeKeys])

  if (error) {
    return <p>{error.message}</p>
  }

  const table = useTable({
    columns,
    data: data?.kc_user_exchange_keys ?? [],
  })

  return (
    <>
      <h2>☰ Exchange API List</h2>
      <Table table={table} />
      <Button type='primary' onClick={onCreate}>
        Add API Keys
      </Button>
    </>
  )
}

export { UserExchangeKeysList }
