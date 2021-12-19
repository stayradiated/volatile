import { useCallback } from 'react'
import { gql, useMutation } from '@apollo/client'

import {
  GetUserExchangeKeysListByUidQuery,
  DeleteUserExchangeKeysMutation,
  DeleteUserExchangeKeysMutationVariables,
} from '../../utils/graphql'

type UserExchangeKeys =
  GetUserExchangeKeysListByUidQuery['kc_user_exchange_keys'][0]

const MUTATION = gql`
  mutation deleteUserExchangeKeys($userExchangeKeysUID: uuid!) {
    delete_kc_user_exchange_keys_by_pk(uid: $userExchangeKeysUID) {
      uid
    }
  }
`

const QUERY_FRAGMENT = gql`
  query getUserExchangeKeysListByUID {
    kc_user_exchange_keys {
      uid
    }
  }
`

const useDeleteUserExchangeKeys = () => {
  const [mutate] = useMutation<
    DeleteUserExchangeKeysMutation,
    DeleteUserExchangeKeysMutationVariables
  >(MUTATION)

  const deleteUserExchangeKeys = useCallback(
    async (userExchangeKeysUID: string) => {
      return mutate({
        variables: {
          userExchangeKeysUID,
        },
        update: (cache) => {
          const list = cache.readQuery<GetUserExchangeKeysListByUidQuery>({
            query: QUERY_FRAGMENT,
          })
          const listNext = list?.kc_user_exchange_keys?.filter(
            (item: UserExchangeKeys) => item.uid !== userExchangeKeysUID,
          )

          cache.writeQuery({
            query: QUERY_FRAGMENT,
            data: { kc_user_exchange_keys: listNext },
          })
        },
      })
    },
    [mutate],
  )

  return deleteUserExchangeKeys
}

export { useDeleteUserExchangeKeys }
