import { gql, useMutation } from '@apollo/client'

import type {
  UpdateUserExchangeKeysMutation,
  UpdateUserExchangeKeysMutationVariables,
} from '../../utils/graphql'

const MUTATION = gql`
  mutation updateUserExchangeKeys(
    $userExchangeKeysUID: uuid!
    $description: String
    $keys: jsonb
  ) {
    update_user_exchange_keys(
      user_exchange_keys_uid: $userExchangeKeysUID
      description: $description
      keys: $keys
    ) {
      user_exchange_keys {
        uid
        description
        exchange {
          uid
        }
        invalidated_at
        dca_orders_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
`

const useUpdateUserExchangeKeys = () => {
  const [mutate] = useMutation<
    UpdateUserExchangeKeysMutation,
    UpdateUserExchangeKeysMutationVariables
  >(MUTATION)

  return async (variables: UpdateUserExchangeKeysMutationVariables) => {
    return mutate({ variables })
  }
}

export { useUpdateUserExchangeKeys }
