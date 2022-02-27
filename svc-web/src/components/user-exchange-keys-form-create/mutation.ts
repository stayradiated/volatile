import { gql, useMutation } from '@apollo/client'

import type {
  CreateUserExchangeKeysMutation,
  CreateUserExchangeKeysMutationVariables,
} from '../../utils/graphql'

const MUTATION_CREATE_USER_EXCHANGE_KEYS = gql`
  mutation createUserExchangeKeys(
    $description: String!
    $exchangeUID: uuid!
    $keys: jsonb!
  ) {
    create_user_exchange_keys(
      description: $description
      exchange_uid: $exchangeUID
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

const useCreateUserExchangeKeys = () => {
  const [createUserExchangeKeys] = useMutation<
    CreateUserExchangeKeysMutation,
    CreateUserExchangeKeysMutationVariables
  >(MUTATION_CREATE_USER_EXCHANGE_KEYS)

  return async (variables: CreateUserExchangeKeysMutationVariables) => {
    return createUserExchangeKeys({
      variables,
      update(cache, response) {
        const { data } = response
        cache.modify({
          fields: {
            kc_user_exchange_keys(list) {
              const newItem = cache.writeFragment({
                data: data?.create_user_exchange_keys?.user_exchange_keys,
                fragment: gql`
                  fragment NewKeys on kc_user_exchange_keys {
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
                `,
              })
              return [...list, newItem]
            },
          },
        })
      },
    })
  }
}

export { useCreateUserExchangeKeys }
