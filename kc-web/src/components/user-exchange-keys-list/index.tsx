import { Table } from 'antd'
import { gql, useQuery, useMutation } from '@apollo/client'
import { useCallback } from 'react'

import {
  GetUserExchangeKeysListQuery,
  GetUserExchangeKeysListQueryVariables,
  DeleteUserExchangeKeysMutation,
  DeleteUserExchangeKeysMutationVariables,
} from '../../utils/graphql'

type UserExchangeKeys = GetUserExchangeKeysListQuery['kc_user_exchange_keys'][0]

const QUERY_USER_EXCHANGE_KEYS_LIST = gql`
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

const MUTATION_DELETE_USER_EXCHANGE_KEYS = gql`
  mutation deleteUserExchangeKeys($userExchangeKeysUID: uuid!) {
    delete_kc_user_exchange_keys_by_pk(uid: $userExchangeKeysUID) {
      uid
    }
  }
`

const UserExchangeKeysList = () => {
  const [deleteUserExchangeKeys] = useMutation<
    DeleteUserExchangeKeysMutation,
    DeleteUserExchangeKeysMutationVariables
  >(MUTATION_DELETE_USER_EXCHANGE_KEYS)
  const { data, loading, error } = useQuery<
    GetUserExchangeKeysListQuery,
    GetUserExchangeKeysListQueryVariables
  >(QUERY_USER_EXCHANGE_KEYS_LIST)

  const handleDelete = useCallback(
    (userExchangeKeysUID: string) => {
      deleteUserExchangeKeys({
        variables: {
          userExchangeKeysUID,
        },
        update: (cache) => {
          const list = cache.readQuery<GetUserExchangeKeysListQuery>({
            query: QUERY_USER_EXCHANGE_KEYS_LIST,
          })
          const listNext = list?.kc_user_exchange_keys?.filter(
            (item) => item.uid !== userExchangeKeysUID,
          )

          cache.writeQuery({
            query: QUERY_USER_EXCHANGE_KEYS_LIST,
            data: { kc_user_exchange_keys: listNext },
          })
        },
      })
    },
    [deleteUserExchangeKeys],
  )

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <div>
      <h4>User Exchange Key List</h4>
      <Table
        rowKey="uid"
        dataSource={data?.kc_user_exchange_keys}
        loading={loading}
      >
        <Table.Column title="Description" dataIndex="description" />
        <Table.Column title="Exchange" dataIndex={['exchange', 'name']} />
        <Table.Column title="Invalidated At" dataIndex="invalidated_at" />
        <Table.Column
          title="DCA Order Count"
          dataIndex={['dca_orders_aggregate', 'aggregate', 'count']}
        />
        <Table.Column
          title="Delete"
          dataIndex="uid"
          render={(uid: string) => (
            <button
              onClick={() => {
                handleDelete(uid)
              }}
            >
              Delete
            </button>
          )}
        />
      </Table>
    </div>
  )
}

export { UserExchangeKeysList }
