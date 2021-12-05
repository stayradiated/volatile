import { useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'
import { useTable, Column } from 'react-table'
import { parseISO, format } from 'date-fns'

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

  const deleteUserExchangeKeys = useDeleteUserExchangeKeys()
  const { validateUserExchangeKeys } = useValidateUserExchangeKeys()

  const { data, loading, error } = useQuery<
    GetUserExchangeKeysListQuery,
    GetUserExchangeKeysListQueryVariables
  >(QUERY)

  const columns = useMemo(() => {
    const columns: Array<Column<UserExchangeKeys>> = [
      { Header: 'Exchange', accessor: (row) => row.exchange.name },
      { Header: 'Keys', accessor: 'description' },
      { Header: 'Last Modified', accessor: 'updated_at', Cell: (props) => {
        const { value } = props
        return format(parseISO(value), 'PPpp')
      }},
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

          const handleValidate = async () => {
            const result = await validateUserExchangeKeys({ userExchangeKeysUID })
            alert(JSON.stringify(result))
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

  const table = useTable({
    columns,
    data: data?.kc_user_exchange_keys ?? [],
  })

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <>
      <h2>☰ Exchange API List</h2>
      <Table table={table} />
      <Button type="primary" onClick={onCreate}>
        Add API Keys
      </Button>
    </>
  )
}

export { UserExchangeKeysList }
