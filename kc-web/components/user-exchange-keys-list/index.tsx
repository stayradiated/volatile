import { useCallback } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'

const QUERY_USER_EXCHANGE_KEYS_LIST = gql`
  query user_exchange_keys_list {
    kc_user_exchange_keys {
      uid
      description
      exchange {
        uid
        id
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

type QueryUserExchangeKeysListData = {
  kc_user_exchange_keys: Array<{
    uid: string
    description: string
    exchange: {
      uid: string
      id: string
    }
    invalidated_at: string | undefined
    dca_orders_aggregate: {
      aggregate: {
        count: number
      }
    }
  }>
}

const MUTATION_DELETE_USER_EXCHANGE_KEYS = gql`
  mutation delete_kc_user_exchange_keys($userExchangeKeysUID: uuid!) {
    delete_kc_user_exchange_keys_by_pk(uid: $userExchangeKeysUID) {
      uid
    }
  }
`

type UserExchangeKeys = {
  uid: string
  description: string
  exchange: {
    id: string
  }
  invalidated_at: string | undefined
  dca_orders_aggregate: {
    aggregate: {
      count: number
    }
  }
}

type ExchangeListItemProps = {
  userExchangeKeys: UserExchangeKeys
  onDelete: (userExchangeKeysUID: string) => void
}

const UserExchangeKeysListItem = (props: ExchangeListItemProps) => {
  const { userExchangeKeys, onDelete } = props
  const { description, uid, exchange, invalidated_at, dca_orders_aggregate } =
    userExchangeKeys

  const handleDelete = () => {
    onDelete(uid)
  }

  return (
    <tr>
      <td>{description}</td>
      <td>{exchange.id}</td>
      <td>{invalidated_at}</td>
      <td>{dca_orders_aggregate.aggregate.count}</td>
      <td>
        <code>{uid}</code>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  )
}

const UserExchangeKeysList = () => {
  const [deleteUserExchangeKeys] = useMutation(
    MUTATION_DELETE_USER_EXCHANGE_KEYS,
  )
  const { data, loading, error } = useQuery<QueryUserExchangeKeysListData>(
    QUERY_USER_EXCHANGE_KEYS_LIST,
  )

  const handleDelete = useCallback(
    (userExchangeKeysUID: string) => {
      deleteUserExchangeKeys({
        variables: {
          userExchangeKeysUID,
        },
        optimisticResponse: true,
        update: (cache) => {
          const list = cache.readQuery<QueryUserExchangeKeysListData>({
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

  if (loading) {
    return <p>loading exchange list...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  const children =
    data?.kc_user_exchange_keys.map((userExchangeKeys: UserExchangeKeys) => (
      <UserExchangeKeysListItem
        key={userExchangeKeys.uid}
        userExchangeKeys={userExchangeKeys}
        onDelete={handleDelete}
      />
    )) ?? []

  return (
    <div>
      <h4>User Exchange Key List</h4>
      <table>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export { UserExchangeKeysList }
